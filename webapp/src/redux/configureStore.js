import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import reduxReset from 'redux-reset';

const configureStore = (initialState = {}, history) => {
  let middleware = compose(applyMiddleware(thunk, promiseMiddleware(), routerMiddleware(history)), reduxReset());
  return middleware(createStore)(rootReducer, initialState);
};

export default configureStore;
