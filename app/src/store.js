import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

import reducersCombined from './reducers/combinedReducers';

// If you have a Redux extesion for Chrome.
const enhacers = (window.devToolsExtension ? window.devToolsExtension() : f => f);

// export const history = createHistory();

export const store = createStore(
  reducersCombined,
  compose(
    applyMiddleware(thunk),
    enhacers
  )
);

export default store;