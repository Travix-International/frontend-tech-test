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

# Developer's notes

## Getting started

Install dependencies:
`yarn`

To run application in development mode, use:
`yarn start` in one terminal to start frontend app and `yarn server` in another to start backend app.

Alternatively, run `yarn dev` to run those processes simultaneously.

Client app uses port 3000, server app uses 5000.

## Deployment

For continuous integration it is used CircleCI. Picture: https://gyazo.com/0f85a980b40c67a1a484a98ac8e8284a
CircleCI uses Docker to build images.

To build docker image, use `docker build -t <image-name> .`.
To run docker image locally, use `docker run -p 5000:5000 <image-name>`.

## Try out

Go to https://travixfrontendjevgenirum.azurewebsites.net to see deployed app