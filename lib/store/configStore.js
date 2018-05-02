import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/';
import rootSaga from '../sagas/';

let middleware;
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV !== 'production') {
  const { composeWithDevTools } = require('redux-devtools-extension');
  middleware = composeWithDevTools(
    applyMiddleware(
      require('redux-immutable-state-invariant').default(),
      sagaMiddleware
    )
  );
} else {
  middleware = applyMiddleware(sagaMiddleware);
}

const configStore = initialState => {
  const store = createStore(rootReducer, initialState, middleware);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configStore;
