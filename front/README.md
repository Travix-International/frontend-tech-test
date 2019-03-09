# Project Cainthus

Ps: Sorry about my unique commit, I was read the README.md about the test and I jumped the part about the branch and started to write the code and to commit in the master. I was doing my final checkout and I saw that I was doing wrong, I did a revert and create the new branch but I lost my commits. Sorry again. 

## Challenge

[Readme with description the challenge](/README-TEST.md)

## Technologies to front

- React: Lib single application
- Redux: Work with stories in the React
- Axios: Execute all requests
- Styled Components: CssInJs
- Webpack 4: A bundler for javascript
- Babel: Javascript compiler
- Jest: Test all JavaScript code
- Chai: Assertion library (better than jest)
- Sinon: Standalone test spies, stubs and mocks for JavaScript
- React-thunk: Async middleware for Redux.
- MomentJs: Parse, validate, manipulate, and display dates and times in JavaScript.
- Enzyme: Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

I didn't use react-lazyload because this project is very small, but if it is necessary to the project is very easy to implement after.

## Run Project

  To run this project you need to install all packages in npm, to do it run:

`$ npm install`

### Run project - dev-mode

`$ npm run start`

### Build - Production

After running this command, a folder "dist" will be created with the files to send to production.

`$ npm run build`

### Run lint

`$ npm run lint`

Lint fix

`$ npm run lint:fix`

### Run tests

Test with coverage

`$ npm run test`

Test with watch (dev-mode)

`$ npm run test:watch`

## Deploy

To do the deploy, you need only install and do your login in the Now.

`$ npm install -g now`

`$ now login`

`$ now`
