const { createStore, applyMiddleware } = require('redux');
const rootReducer = require('../reducers');
const thunk = require('redux-thunk').default;

module.exports = createStore(
  rootReducer,
  applyMiddleware(thunk)
);