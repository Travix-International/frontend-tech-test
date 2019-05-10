
# Travix test

Travix Front-End Tech Interview Test.

## Environment

- OS: macOS 10.14.3
- Node: v10.8.0
- Browser: Chrome 74, Safari 12.0.3
  
## How To USe

#### Install
```bash
npm install
```

#### Run Server
```bash
npm run start-server
```

#### Run Client
```bash
npm start
```
#### Run Tests
```bash
npm test
```

#### Build
```bash
# Production build
npm run build
# Server the static content
node clientServer.js
```

## Requirements

- [x] React 15+ (React 16.8)

- [x] Redux or Flux or [FrintJS](https://frint.js.org) or other alternatives that implement a unidirectional data flow (Redux)

- [x] SASS or LESS (SASS & CSS Module)

- [x] Must be responsive ([Reactstrap](https://github.com/reactstrap/reactstrap))

- [x] unit-tests for the UI ([Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/airbnb/enzyme))

- [x] integration-test 

- [x] using the `made in Travix` technologies ([eslint-config-travix](https://github.com/Travix-International/eslint-config-travix))

## Features

- Add, update, delete and search todo

- Filter todos by status (all, active, completed)

- Responsive UI

- Using [react-window](https://github.com/bvaughn/react-window) to render the large list efficiently

## Future Improvements

- Inifite scrolling to load data by chunk

- Asynchronous filter actions

- More tests
