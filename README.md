# Travix-Todo

Travix Todo App is a simple To-do application built with ReactJS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

##### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

### Installing the App

A step by step series of instructions that tell you how to get a development env running

	$ git clone https://github.com/sainiankit/travix.git
    $ cd travix
    $ npm install


### Running the tests

Run the automated Unit & Integration tests for Travix Todo Frontend Application. (Travix Todo App uses Enzyme as the testing framework.)

	npm test

### Running the Application with Webpack Dev Server

	npm run demo
The application should be runnning on localhost:9002/

[![Travix Todo](https://sainiankit.github.io/images/traviximage1.png "Travix Todo")](https://sainiankit.github.io/images/traviximage1.png "Travix Todo")

[![Task Desctiption](https://sainiankit.github.io/images/traviximage2.png "Task Desctiption")](https://sainiankit.github.io/images/traviximage2.png "Task Desctiption")
### Deployment
	npm run build
will emit bundle.js and index.html in the dist folder which can be used in the production.

## Built With

* [ReactJS](https://reactjs.org/) - Fronted View framework used
* [Node](https://maven.apache.org/https://nodejs.org/en/) - REST API and Dependency Management
* [ExpressJS](https://expressjs.com/) - Web Server for REST API
* [Enzyme](https://github.com/airbnb/enzyme) - Unit & Integration Testing framework

## Authors

* **Ankit Saini** 