import { createStore, applyMiddleware, combineReducers } from 'redux';

export default ({ state, reducers = {}, middlewares = [] }) => (
  createStore(combineReducers(reducers), state, applyMiddleware(...middlewares),
  )
);
