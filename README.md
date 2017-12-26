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

* [x] React 15+
* [x] Redux or Flux or [FrintJS](https://frint.js.org) or other alternatives that implement a unidirectional data flow
* [x] SASS or LESS
* [x] Must be responsive
* [x] We have big tasks files for testing the application (very huge)

# Bonus

* [x] unit-tests for the UI
* [x] integration-test (one (or more) just in order to show that you know what is it (: )
* [x] evolution - unit-tests for the server
* [ ] dynamic-ui (web-sockets...?)
* [ ] using the `made in Travix` technologies
* [ ] ... Impress us!

# Developer notes

## Server side

* API endpoints were simplified.
  * Endpoints base path was renamed to `/api/tasks`
  * Actions can be obtained from METHOD, `/delete, /update...` are redundant.
* To ease deployment all config values were moved to environment variables.
  * `STORAGE_FILE`: JSON file where tasks will be stored. Default: `./tasks.json`
  * `LISTENER_PORT`: Port where server will be listening. Default: `9001`

## Testing

* Build frontend
  `yarn build`

* Test with big tasks file
  `STORAGE_FILE=tasks.big.json yarn start`
