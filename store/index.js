/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';

import reducers from './../reducers';
import sagas from './../sagas';

const sagaMiddleware = createSagaMiddleware();

export const initStore = (initialState) => {
	const store = createStore(
		reducers,
		initialState,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);
	store.sagaTask = sagaMiddleware.run(sagas);
	return store;
};

export function withReduxSaga(BaseComponent) {
	return withRedux(initStore)(nextReduxSaga(BaseComponent));
}

export default initStore;
