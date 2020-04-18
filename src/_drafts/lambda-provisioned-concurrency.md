---
top: 3
category: serverless
tags:
  - architecture
  - serverless
  - scalability
  - lambda
  - aws
date: 2020-01-25
title: Lambda provisioned concurrency
---

In re-invent 2019, AWS has announced Provisioned Concurrency feature, this feature provides customers with greater control over performance of serverless applications at any scale.
<!-- more -->
Out of pure luck, The day of announcement my team was working on a functionality that just needed that feature. We wanted to keep one of our lambdas warm up to avoid some failing tests due to timeout. In this post I will explain how you can use this new feature. first we need a refresher on lambda cold starts.

## What is lambda cold start?
How does AWS know how many workers it needs to run for a given function? Well, it doesn’t know in advance. AWS allocates new workers on-demand as the Lambda gets invoked.

Whenever Lambda receives a request but it has no idle workers, the control plane assigns a new generic worker to it. The worker then has to download the custom code or binaries of your Lambda and load them into memory before it can service the request. This process takes time, which significantly increases response latency.

The issue of sporadically slow responses caused by the need to increase the pool of workers is known as Cold Start. Cold starts are consistently the top concern about the applicability of serverless technologies to latency-sensitive workloads. There are numerous articles about the problem, including many articles I have written in the Cold Starts section on my website

## Warming up lambda functions

Cold starts don’t occur for the majority of requests because AWS Lambda reuses workers between subsequent invocations. However, if a particular worker is idle for too long (usually, several minutes), AWS may decide to recycle and return it to the generic pool.

A trick known as Lambda Warmers uses kept-alive workers to reduce the frequency of cold starts. The idea is to have a CloudWatch timer that fires every few minutes and sends N parallel requests to the target Lambda. If all those requests land at the same time, AWS has to provision at least N workers to process them. The actual operation doesn’t have to do any useful work, but it resets the recycling timer back to zero.

There are a few drawbacks with this approach:

If a valid request comes at the same time as warming requests, it might hit a cold start.
Extra logic is needed in the Lambda code to detect warming requests and short-circuit them instead of doing useful work.
CloudWatch rules require additional setup and management.
The result is still best-effort: Lambda still recycles workers from time to time.
You can find more details about how Pulumi can help with some of these issues in AWS Lambda Warmer as Pulumi Component.

## How concurrency works in lambda?
Despite being serverless, AWS Lambda uses lightweight containers to process incoming requests. Every container, or worker, can process only a single request at any given time.
Because of this, the number of concurrent requests defines the number of required workers that a specific AWS Lambda function needs to serve a response at any given moment.

## What is Provisioned Concurrency?
At re:Invent 2019, AWS introduced Lambda Provisioned Concurrency—a feature to work around cold starts. The base concurrency model doesn’t change. However, you can request a given number of workers to be always-warm and dedicated to a specific Lambda.

Here is an example of configuring the provisioned concurrency with Pulumi in TypeScri
The snippet sets the provisioned concurrency for mylambda to a fixed value of 2. Note that concurrency is provisioned per Lambda version, and it can’t be set for the $LATEST version alias. Therefore, I set the publish attribute of my Lambda to true and reference a specific version of the Lambda in provisioning.

## How to Dynamically configure your lambdas
A fixed level of provisioned concurrency works well for stable workloads.


However, many workloads fluctuate a lot. Extreme elasticity and lack of configuration parameters have always been the essential benefits of AWS Lambda. It works great if you can tolerate the cold starts that come during scale-out. If not, you can explore more advanced scenarios for provisioning concurrency dynamically.

Instead of choosing a permanently fixed value, you can configure provisioned concurrency to autoscale. The first required component is the autoscaling target:
The second component is the autoscaling policy, which defines the conditions when scaling starts. There are two important ways to adapt your concurrency provisioning to traffic patterns.

## Provisioned Concurrency based on utilization
If your workload pattern is less predictable, you can configure autoscaling for provisioned concurrency based on the measured utilization.
Currently, there are issues with autoscaling based on the metrics, which makes provisioned concurrency scale less effectively than what the chart above shows. Hopefully, Amazon will fix these issues soon.

## Provisioned Concurrency pricing model

While hand-crafted Lambda warmers are virtually free, provisioned concurrency can be costly. The new pricing is an integral part of the change: Instead of purely per-call model, AWS charges per hour for provisioned capacity.

You would pay $0.015 per hour per GB of provisioned worker memory, even if a worker handled zero requests.

The per-invocation price gets a discount: $0.035 per GB-hour instead of the regular $0.06 per GB-hour. This change means that fully-utilized workers would be cheaper if provisioned compared to on-demand workers.