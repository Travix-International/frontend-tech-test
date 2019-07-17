import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const configureStore = (preloadedState) => {
  const middlewares = [thunk];
  const composed = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, preloadedState, compose(...composed));

  return store;
};

export default configureStore;
