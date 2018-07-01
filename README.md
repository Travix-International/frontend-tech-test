# Travix test

Travix Front-End Tech Interview Test 

# Introduction

The aim of the test is to develop a mini-application for managing TODO tasks.

Using your application we must be able to create, modify and delete a task.

A really simple server has been implemented with Express. It offers the minimum of expected functionalities (get the list of tasks, update a task, delete a task, save a task).

However this server is not perfect. It could be improved and tested as well.

So your mission is to develop the front-end from scratch using a front-end framework.

We are also expecting from you a usable, responsive UI.

# Process

Fork the repository into your account. Once your code is ready, send a pull-request to this repository and we will review it.

# Requirements

* React 15+
* Redux or Flux or [FrintJS](https://frint.js.org) or other alternatives that implement a unidirectional data flow
* SASS or LESS
* Must be responsive
* We have big tasks files for testing the application (very huge)

# Bonus

* unit-tests for the UI 
* integration-test (one (or more) just in order to show that you know what is it (: )
* evolution - unit-tests for the server
* dynamic-ui (web-sockets...?)
* using the `made in Travix` technologies
* ... Impress us!

----

# Developer's notes

## Try out

You can see application if you go to https://travixfrontendjevgenirum.azurewebsites.net.

## Getting started

Install dependencies and run application with frontend and backend (default ports are 3000 and 5000):
```
yarn
yarn dev
```

Alternatively, to run application separately in frontend, use:
```
yarn start
```

... and to run application separately in backend, use:
```
yarn server
```

## What is used

Features:
- routing
- CRUD tasks
- searching (using rxjs)
- server-side sorting, filtering, pagination; displaying results in paginated table
- input validation: title and description are both required

## Deployment

For continuous integration it is used CircleCI. Picture: https://gyazo.com/0f85a980b40c67a1a484a98ac8e8284a
CircleCI uses Docker to build images.

To build docker image locally, use `docker build -t <image-name> .`.
To run docker image locally, use `docker run -p 5000:5000 <image-name>`.

## Integration testing

To run express integration API tests, run
```
yarn server-tests
```
Libraries chai and chai-http were used for testing. During the test, application's port 5000 will be used

## React/Redux unit testing

There are few tests located in ``/src/app/routes/Tasks/__tests__`.
To run all the react/redux tests, run:
```
yarn test
```