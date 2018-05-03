import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/';
import rootSaga from '../sagas/';

let middleware;
const sagaMiddleware = createSagaMiddleware();

/* non-production redux middleware */
if (process.env.NODE_ENV !== 'production') {
  const { composeWithDevTools } = require('redux-devtools-extension');
  middleware = composeWithDevTools(
    applyMiddleware(
      require('redux-immutable-state-invariant').default(),
      sagaMiddleware,
    )
  );
} else {
  /* production middleware */
  middleware = applyMiddleware(sagaMiddleware);
}

/**
 * configStore
 *
 * initialState: Object
 *
 * Take the preloaded state provided by the server
 * create a new store with the new state
 * add environment specific redux middleware
 * return the new store for the Provider to use
 */
const configStore = initialState => {
  const store = createStore(rootReducer, initialState, middleware);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configStore;
