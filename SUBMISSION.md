# Taskstack

[![Build Status](https://travis-ci.org/larry-dalmeida/frontend-tech-test.svg?branch=master)](https://travis-ci.org/larry-dalmeida/frontend-tech-test)

A mini-application for managing TODO tasks.
Live demo: [http://taskstack.herokuapp.com/](http://taskstack.herokuapp.com/)

_Please note: The demo of the application has been deployed on a free tier instance of Heroku, so it can take up to 30 seconds or more to awaken and load._

[Link](https://trello.com/invite/b/1a8bblqO/c8abd12dfb7656695a35056d241bf726/travix-assignment-to-do-list) to the Trello board to manage this project.

## Features

* Responsive UI
* REST API to support CRUD operations `POST/GET/PATCH/PUT/DELETE /api/tasks`
* Server Side Rendering
* Dynamic UI with Real Time Updates
* Persistent storage
* Unit + Integration Tests
* CI with Travis CI

## Technology Colophon

* React 16, Redux
* Redux Saga - because it makes managing and testing side effects easy.
* SASS
* Express
* Websockets
* MongoDB - easy automatic sharding, consistent, fast in-place updates, partition tolerance and inbuilt high availability with replication and automatic failover.
* Made in Travix: `eslint-config-travix` and `stylelint-config-travix`

## Areas that can be improved

Things I would do differently in an actual production app include:

### Managing a high volume of tasks

#### Client

Current reducer implementation for managing task updates avoids mutating state by copying arrays of tasks. For better performance with a massive number of tasks I would consider using better data structures such as those offered by Immutable.js and also see if optimizing selectors can help.

#### Server

A very simple lazy loading has been implemented to avoid pushing too many tasks to the user in the first load. The current implementation uses SSR to render the top 20 incomplete tasks and then loads the rest once the application mounts.

This is unrealistic in a real production app as there could be too many tasks to send so a different approach will be required.

Server implemented is very simple. In a real application would require load balancing, caching recently created tasks with Memcache or Redis and other strategies to ensure consistency, especially when notifying all clients with websockets.

### User Experience

Current application does not provide any features for the user to search for task by title or description. Also it loads all tasks at once which is not ideal for data usage - I would implement infinite scrolling instead. I would also add more animations.

### Offline First PWA

Currently this application treats the network as always available. A real world application would offline first with a network-first strategy for updates but fallback to IndexDB/WebSQL or localstorage if the network is unavailable.

### Security

Sanitizing user provided data would help fight off XSS attacks. Also adding CSRF protection would be essential.

## Getting Started

### Prerequisites

* Node LTS versions >= 8.11.1
* Yarn

## Navigating the directories

* `lib` contains all the source code for client and server
* `public` contains generated bundles of CSS/JS
* `views` contains an placeholder `index.ejs`
* client app starts in `lib/renderers/dom.js`
* server starts in `lib/server.js`
* `lib/server` houses all the server code

### Installing

All development and test environment configurations are placed in `dev.env` and `test.env`. To limit the dependencies needed I have used [mlab](https://mlab.com) instances for dev and test. Heroku Add-on for production. All required dependencies are in `package.json`.

`yarn install`

To start the application in development mode:

```
yarn dev:server
yarn dev:webpack
```

To check server logs:

`pm2 logs --lines 100`

## Running the tests

For tests + coverage:

`yarn test`

To run the tests in watch mode:

`yarn test-watch`

## Deployment

Production builds can be generated using the following NPM scripts:

```
yarn prestart
yarn start
```
