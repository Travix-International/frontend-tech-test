import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducersCombined from './modules/combinedReducers';

// If you have a Redux extesion for Chrome.
const enhacers = (window.devToolsExtension ? window.devToolsExtension() : f => f);

export const history = createHistory();

export const store = createStore(
  reducersCombined,
  undefined,
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    enhacers
  )
);
