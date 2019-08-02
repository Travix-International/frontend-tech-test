# Twodo

A simple task manager app.

# Installation Guide

Clone the project.

## Backend

1. Open `backend` directory and install dependencies by the command below:
```sh
$ npm install
```

2. Open `server.js` file and change the line below to any domain you are going to run the frontend app:
```js
$ const frontendOrigin = "http://localhost:3001";
```
> It's because of CORS issue. It can be done by setting proxy as well.

3. Run the nodejs server: 
```sh
$ node server.js
```

3. It will start the server on [http://localhost:9001](http://localhost:9001)

## Frontend
1. Open `frontend` directory.

2. Install dependencies.
```sh
$ yarn install
```

3. Rename `.env.development.local.example` file to `.env.development.local`. Then open the renamed file and add your environment variables:

```env
PORT=<Application running port: 3001>
REACT_APP_API_HOST=<API host: http://localhost>
REACT_APP_API_PORT=<API port: 9001>
REACT_APP_API_VERSION=<API version: v1> #Leave it empty because backend does not have any versioning yet
```
It will be look like something like this:
```env
PORT=3001
REACT_APP_API_HOST=http://localhost
REACT_APP_API_PORT=9001
REACT_APP_API_VERSION=
```

4. Run project in a development mode.
```sh
$ yarn start
```

## Tests

### Cypress tests
1. Rename `cypress.env.json.example` file to `cypress.env.json`. Then open the renamed file and add your environment variables:

```json
{
  "HOST": "Frontend running domain",
  "PORT": "Frontend running port"
}
```
It will be look like something like this:
```json
{
  "HOST": "http://localhost",
  "PORT": 3001
}
```
2. Run tests.
```sh
$ yarn cy:open
```
### Unit tests

1. Rename `.env.test.local.example` file to `.env.test.local`. Then open the renamed file and add your environment variables:

```env
PORT=<Application running port: 3001>
REACT_APP_API_HOST=<API host: http://localhost>
REACT_APP_API_PORT=<API port: 9001>
REACT_APP_API_VERSION=<API version: v1> #Leave it empty because backend does not have any versioning yet
```
It will be look like something like this:
```env
PORT=3001
REACT_APP_API_HOST=http://localhost
REACT_APP_API_PORT=9001
REACT_APP_API_VERSION=
```
2. To run unit test.
```sh
$ yarn test
```
And press key `a` to run all test.

## Stories
To see components documentation via [Storybook](https://storybook.js.org/) run the command below:
```sh
$ yarn storybook
```

# Todo
- [X] eslint and prittier precommit git hook.
- [X] API class.
- [X] Add Task.
- [X] List Tasks.
- [X] Edit Tasks.
- [X] Delete Taksk.
- [X] Add Redux.
- [X] Draft Task (via Redux).
- [X] Responsiveness.
- [X] Create component visiual documantation (Storybook).
- [X] Unit test.
- [X] e2e test (via Cypress).
- [X] Review inline code comments.
- [ ] Localization.
- [ ] Dockerizing.