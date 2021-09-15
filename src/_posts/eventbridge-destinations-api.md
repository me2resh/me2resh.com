---
top: 1
category: code
tags:
  - php
  - doctrine
  - mysql
date: 2021-09-15
title: Eventbridge Destinations API
---
Eventbridge is one of the powerful tools in the AWS toolbox when you move towards loosely coupled / event-driven architectures.

In this blog post, I would like to explain by example one of my use cases of event bridge using API Destinations.

<!-- more -->

## What is EventBridge?

Eventbridge is a serverless event bus that enables you to build event-driven applications at scale using events generated from your applications.

## How it works?

Evnebridge connects applications using events, You can fire an event from one of your applications and define filtering rules to route them to specific targets. Those targets can be AWS Services in the same AWS account, another AWS account, or API destinations via HTTP.


## What are API Destinations?

API Destinations are a form of 3rd party targets(SaaS applications)that can be invoked by event bridge events using REST API calls. API Destinations supports basic, OAuth, and API Key authorization. There are many API destination partners listed here, but you can also use this feature with any 3rd party that has a REST API.

## A working examples

I usually use API Destinations when I want to decouple an asynchronous call from my logic, and when that call invokes a 3rd party REST API.

Let us assume we are implementing the following scenario

```
GIVEN A User add their details to the website
AND User data is valid
WHEN User data is saved successfully
THEN a UserCreated event is broadcasted
AND an Email is sent to the user
AND an identify fraud check is triggered
```
So we are building a POST endpoint that accepts user adds a user to the database, and then sends a thank you email to the user after.

We are using SendGrid as an email provider to send the thank you email utilizing their API.

There are multiple ways to achieve that in the cloud to do this asynchronous call but I prefer API Destination because it is a low code approach. I won't have to write the logic to connect to SendGrid API, manage the retries, etc. I can just send the event and create a rule to call.

In this example, we will use the default events bus.

## Architecture
<div style="text-align: center;"><img src="/assets/img/eventbridge.png" width=350></div>


## Implementation Steps:

- Add the lambda function
```yaml

  putUserFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: src/handlers/put-user.putUserHandler
      Runtime: nodejs14.x
      MemorySize: 128
      Timeout: 100
      Description: A simple example includes a HTTP post method to add one user to a DynamoDB table, and fire a UserCreated Event.
      Policies:
        # Give Create/Read/Update/Delete Permissions to the UserTable
        - DynamoDBCrudPolicy:
            TableName: !Ref UserTable
      Environment:
        Variables:
          # Make table name accessible as environment variable from function code during execution
          USER_TABLE: !Ref UserTable
      Events:
        Api:
          Type: Api
          Properties:
            Path: /user
            Method: POST

```
- Add eventbridge to the template.

```yaml

  CentralBusArn:
    Description: Arn for central event bus
    Type: String
    Default: "arn:aws:events:eu-west-1:548928019564:event-bus/default"
```

- Write the lambda function

```javascript 

const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

import {uuid} from 'uuidv4';

const tableName = process.env.USER_TABLE;

exports.putItemHandler = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    console.info('received:', event);

    const body = JSON.parse(event.body)

    const userData = {id: uuid(), name: body.name, email: body.email}

    var params = {
        TableName: tableName,
        Item: userData
    };

    const result = await docClient.put(params).promise();

    const eventBridgeParam = {
        Entries: [
            {
                // Event envelope fields
                Source: 'com.users',
                EventBusName: 'default',
                DetailType: 'UserCreated',
                Time: new Date(),

                // Main event body
                Detail: JSON.stringify(userData)
            },

        ]
    }

    await eventbridge.putEvents(eventBridgeParam).promise()

    const response = {
        statusCode: 200,
        body: JSON.stringify(body)
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
```
- Give permission to the eventbridge bus
```yaml 


      Policies:
        # Give Create/Read/Update/Delete Permissions to the SampleTable
        - DynamoDBCrudPolicy:
            TableName: !Ref UserTable
        - Statement:
            - Effect: Allow
              Action:
                - events:PutEvents
              Resource: "*"
```
- Create the destination
```yaml

  SendgridApiDestination:
    Type: AWS::Events::ApiDestination
    Properties:
      ConnectionArn:
        Fn::GetAtt: [SendgridConnection, Arn]
      InvocationEndpoint: 'https://api.sendgrid.com/v3/mail/send'
      HttpMethod: POST
      InvocationRateLimitPerSecond: 300
```
- Create the connection
```yaml
  SendgridConnection:
    Type: AWS::Events::Connection
    Properties:
      AuthorizationType: API_KEY
      Description: 'Sendgrid API Credentials'
      AuthParameters:
        ApiKeyAuthParameters:
          ApiKeyName: Authorization
          ApiKeyValue: 'Bearer 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'
```


- Create the rule
```yaml
  ApiDestinationDeliveryRule:
    Type: AWS::Events::Rule
    Properties:
      EventBusName: !Ref CentralBusArn
      EventPattern:
        source:
          - "com.users"
        detail-type:
          - "UserCreated"
      State: ENABLED
      Targets:
        - Arn: !GetAtt SendgridApiDestination.Arn
          Id: SendgridTarget
          RoleArn: !GetAtt SendgridTargetRole.Arn
          InputTransformer:
            InputPathsMap:
              name: $.detail.name
              email: $.detail.email
            InputTemplate: >
              {
                "personalizations": [
                  {
                    "to": [
                      {
                        "email": "ahmed.abdelaliem@gmail.com"
                      }
                    ]
                  }
                ],
                "from": {
                  "email": "ahmed.abdelaliem@gmail.com"
                },
                "subject": "<name>, Using Eventbridge Destinations is Fun",
                "content": [
                  {
                    "type": "text/plain",
                    "value": "and easy to do ;)"
                  }
                ]
              }

```
Create role io inboke the api
```yaml
  SendgridTargetRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Version: "2012-10-17"
        Statement:
          - Effect: Allow
            Principal:
              Service:
                - events.amazonaws.com
            Action:
              - 'sts:AssumeRole'
      Policies:
        - PolicyName: Amazon_EventBridge_Invoke_Sendgrid_API_Destination
          PolicyDocument:
            Version: "2012-10-17"
            Statement:
              - Effect: Allow
                Action: events:InvokeApiDestination
                Resource: !GetAtt SendgridApiDestination.Arn
```
- Send the event
```javascript
    const eventBridgeParam = {
        Entries: [
            {
                // Event envelope fields
                Source: 'com.users',
                EventBusName: 'default',
                DetailType: 'UserCreated',
                Time: new Date(),

                // Main event body
                Detail: JSON.stringify(userData)
            },

        ]
    }

    await eventbridge.putEvents(eventBridgeParam).promise()
```


This was one of my favourite use cases of Eventbridge, the full code for the examlpe is here [https://github.com/me2resh/eventbridge-api-destinations-example](https://github.com/me2resh/eventbridge-api-destinations-example)
