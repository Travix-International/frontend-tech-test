import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { appData } from './reducers';
import { update } from './reducers/update';
import { create } from './reducers/create';

const rootReducer = combineReducers ({
  appData,
  update,
  create
});

// returns true in development environment.
const isDevelopment = env => env === 'development';

export const configureStore = (env) => {
  const middlewares = [ thunk ];
  if (isDevelopment (env)) {
    middlewares.push (createLogger ());
  }

  return createStore (
    rootReducer,
    applyMiddleware (...middlewares)
  )
}

