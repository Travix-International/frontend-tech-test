import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middleware = [thunkMiddleware];
let store;

// In production environment both devtools and logger are disabled
if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, applyMiddleware(...middleware));
} else {
  middleware.push(createLogger());

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

export default function configureStore(preloadedState) {
  return store;
}
