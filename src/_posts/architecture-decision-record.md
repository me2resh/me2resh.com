---
top: 3
category: architecture
tags:
  - architecture
  - adr
date: 2019-01-02
title: Architecture Decision Records
---

I have been looking for a way to introduce clarity over the changes made to the codebase.
<!-- more -->
Until I stumbled upon architecture decision record (adr)

## What is an ADR?

An architecture decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

There are different templates of adr you can adopt, but a typical adr will contain:

  ### Title
a brief title of the decision
  ### Status
a status of the decision (proposed / accepted / pending / rejected)
  ### Context
a summary of the decision, and context about why we are making it.
  ### Decision
  The decision itself (ex: use certain library)

  ### Consequences
cons and pros from that decision

## Why do we use ADRs?

- Because not all decisions will be made at once, nor will all of them be done when the project begins.

- To track the motivation behind certain decisions during the life of a project.

- Because without understanding the rationale of consequences behind decision people have two choices:
  * Blindly accept the decision without understanding.
  * Blindly change the decision because of lack of understanding.

## How to create ADRs?
ADRs are text files at the end, you can create them manually in your project, or use a cli too like adr-tools to do that

- Installation
```bash
brew install adr-tools
adr init
```
- Add ADRs to your project
```bash
cd Project/
adr init
```
- Create your first adr:
```bash
adr new use mockery for unit tests
```
Your directory structure will looks like 



<img src="/assets/img/adr-1.png" width=350>

- You can also generate a graph of your ADRs
```bash
adr generate graph
```
This will generate a graph of your decisions
<img src="/assets/img/adr-2.png" width=350>
