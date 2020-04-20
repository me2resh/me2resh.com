---
top: 3
category: serverless
tags:
  - serverless
  - chalice
  - aws
  - lambda
date: 2020-04-18
title: Introduction to aws chalice
---
<span dir=rtl><social-share :networks="['email', 'facebook', 'twitter', 'linkedin']" /></span>
Adoption for Serverless is growing across the tech companies, there are always new tools to make this journey easy, 

<!-- more -->

I have been looking at Chalice, and it is one of those tools made for python lovers for fast API prototyping and easy writing of ETL jobs.

## What is AWS Chalice?


<div style="text-align: center;"><img src="/assets/img/introduction-to-aws-chalice/chalice-logo.png" width=350></div>

AWS chalice is a microframework for writing serverless app in python. that means chalice have a very light footprint. Also it supports only Python for now.

## What does AWS Chalice provide?

- The tool provides a CLI tool that you can use to create your app, test it locally, deploy it to AWS and manage it.

- The tool use decorators to generate the routers for your APIs, triggers and access for your lambda functions.

- Makes it easy to integrate with Amazon API Gateway, Amazon S3, Amazon SNS, Amazon SQS, and other AWS services.

- The tool also auto generate the IAM policies according to your lambda routes, we don't have to create those roles manually.


## How to install AWS Chalice 
Prerequisites:
- Python
- Virtualenv
- Pip

### Installation steps
- Use virtualenv for installation
```bash
virtualenv ~/.virtualenvs/chalice-demo
source ~/.virtualenvs/chalice-demo/activate
pip install chalice
```
- Confirm Installation
```bash
chalice --version
```
you should see output like 
```bash
chalice 1.13.1, python 3.7.7, darwin 19.4.0
```
Congrats, now you have chalice installed and ready to be used.

## Hello World Example
In this example we will use chalice default example to create a hellow world endpoint
<div style="text-align: center;"><img src="/assets/img/introduction-to-aws-chalice/hello-world-example.png" width=500></div>

### Create the project
```bash
chalice new-project helloworld
```

### Deploy to AWS
a prerequisite to this step is to have aws cli configured for your environment.
```bash 
cd helloworld
chalice deploy
```
You will get the following output
```bash
Creating deployment package.
Creating IAM role: helloworld-dev
Creating lambda function: helloworld-dev
Creating Rest API
Resources deployed:
  - Lambda ARN: arn:aws:lambda:eu-west-1:982640118702:function:helloworld-dev
  - Rest API URL: https://fu9ijghrsh8.execute-api.eu-west-1.amazonaws.com/api/ 
```
You can test the endpoint from the output above in your browser, or use the curl command to get the response
```bash 
curl https://fu5ai2rsh8.execute-api.eu-west-1.amazonaws.com/api/
```
You will get the following output
```bash 
{"hello":"world"}
```

### Quick look at the code
```python
from chalice import Chalice

app = Chalice(app_name='helloworld')

@app.route('/')
def index():
    return {"hello": "world"}
```
As you can see the code behind this is so simple, you can play with it and add another endpoint.

In the next articles we will go deeper into more advanced examples with AWS Chalice.






