# Travix Front-end test implementation

The aim of this project is to develop a mini-application for managing TODO tasks.

## Technical requirements

* React 15+
* Redux or Flux or [FrintJS](https://frint.js.org) or other alternatives that implement a unidirectional data flow
* SASS or LESS
* Responsiveness
* Efficient processing of high amount of items

### Possible add-ons

* PWA implementation
* Lazy loading components for improved TTI
* Server Side Rendering
* Store hydration for Redux.

## Functional requirements

* Create a todo item through API
* Retrive list of todos from API
* Retrive an specific todo for a given id through API
* Update an specific todo for a given id through API
* Delete an specific todo for a given id through API[For data analysis purposes, todos are not deleted but marked as `DELETED` and kept in store while server is running.]
* Usable responsive UI[Mobile first]

## Web App mockup

### UI Interactive

![alt text](https://image.ibb.co/ibmy8m/ui_ready.png 'UI Interactive')

### UI Loading/Updating

![alt text](https://image.ibb.co/gwEkom/ui_loading_updating.png 'UI Loading/Updating')

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* NPM or YARN dependency management tools.
* Node ~v8.6.0

```
Give examples
```

### Installing

To install with node, run:

```
npm install
```

To install with yarn, run:

```
yarn install
```

### Building and running

To build and run the environment, run:

```
npm run start
```

If you only want to build the assets, run:

```
npm run build
```

## Running the tests

To test the App suite of tests, run:

```
npm run test-app
```

To test the API suite of tests, run:

```
npm run test-api
```

To test the E2E tests, run:

```
npm run selenium-setup // Sets up the selenium environment.
npm run selenium-start // Makes selenium available for tests.
npm run test-e2e       // Actually runs the tests
```

## Authors

* **Travix International** - _Initial work_ - [Travix International](https://github.com/Travix-International)
* **Michael Castro** - _Resting implementation_ - [MikeCastro26](https://github.com/mikecastro26)

## License

This project is licensed under the MIT License
