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

## How does it work?

* Application meant to run in the server side.
* Next.js been used to handle the SSR.
* Tests been included with in the dev process as TDD.

## Installation
    npm i
    
#### For running the app with tests
    npm start

#### For running the app without tests
    npm run dev
    
## Find in the app
* Next.js for SSR
* Redux for state management
* Redux Saga for handling side effects
* Socket.io
* Mocha as test framework
* Enzyme to test react component

## Notes
* The app is not fully dynamic. Only the updates been developed so as a sample.
* Integration tests with saga are very expensive in terms of time. One only been handled so far.
* Form validation is not perfect.