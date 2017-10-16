# React Todo Manager [![Build Status](https://travis-ci.org/PedroFelipe/frontend-tech-test.svg?branch=master)](https://travis-ci.org/PedroFelipe/frontend-tech-test)

![React Todo Manager](screenshot.png)

A todo tasks manager written with React and a gorgeous UI.

## [Demo](https://nl-react-todo-manager.herokuapp.com)

## Local Development

### Run the API Server

```bash
# Initial setup
npm install

# Start the server
npm start
```

### Run the React UI

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```

## Tests

### API Server
```bash
# Run API tests
npm test
```

### React UI
```bash
# Always change directory, first
cd react-ui/

# Run React UI tests
npm test
```

## Folder Structure

```
react-todo-manager/
  README.md
  package.json
  app/
    app.js
    controller.js
    spec.js
    tasks.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    actions/
    components/
    constants/
    containers/
    css/
    decorators/
    reducers/
    index.css
    index.js
```

## What’s Inside?

* [React](https://facebook.github.io/react)
* [Redux](http://redux.js.org)
* [Babel](http://babeljs.io)
* [webpack](https://webpack.js.org)
* [ESLint](http://eslint.org)
* [Chai](http://chaijs.com)
* [Jest](http://facebook.github.io/jest)
* [Mocha](https://mochajs.org)
* [Supertest](https://github.com/visionmedia/supertest)
* [Sass](http://sass-lang.com)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Bootstrap](http://getbootstrap.com)

## Requirements
- [x] React 16 and Redux
- [x] Sass
- [x] Responsiveness
- [x] Integration tests on backend with 100% coverage
- [x] UI inspired on [vliegwinkel.nl](https://www.vliegwinkel.nl)
