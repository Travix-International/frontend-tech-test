# Travix test

This project includes the server and client.

# Server

## Available Scripts

From the root path the following scripts are available:

### `npm start`

Starts the server [http://localhost:9001](http://localhost:9001)<br>

## Modifications:

- Fixed failed calls
- Added pagination to getall call.   (`/tasks/:page`)

## To improve:

- Change task.id to accept uuids instead of integer.
- Return an offset with the total number of items when get tasks
- Unit tests

# Client

## Available Scripts

From the `/client` path the following scripts are available:

### `npm start`

Starts the client in [http://localhost:3000](http://localhost:3000)

### `npm run test`

Runs all the tests.<br>

### `npm run test:watch`

Launches the test runner in the interactive watch mode.<br>

### `npm run cypress:open`

Open cypress to run integrations tests. It will run against To-Do app in [http://localhost:3000](http://localhost:3000)

## To improve:

- Change todo.id to accept uuid instead of number.
- Add more unit and integration tests
- Show errors in the UI
- Show loading in the UI when save, edit or get To-Do's
- Use config file to store environment variables and use it to get the server url

### Notes
Plase take into consideration that it has been the first time for me using redux, sass, jez, enzyme, babel and unit testing in javascript. 
I have used Reactjs and Nodejs before but just in a very small projects. 
