/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './../reducers';

const composeEnhancers = compose;

const initStore = (initialState) => createStore(
	reducers,
	initialState,
	composeEnhancers(applyMiddleware())
);

export default initStore;
