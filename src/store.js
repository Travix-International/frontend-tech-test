/* global window */
/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__", "__REDUX_DEVTOOLS_EXTENSION__"] }] */
/* eslint comma-dangle: ["error", {"functions": "never"}] */

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk-fsa';

import reducers from './reducers';
import todoListActions from './actions/todoListActions';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = devTools
  ? createStore(reducers, compose(applyMiddleware(thunk), devTools))
  : createStore(reducers, applyMiddleware(thunk));

store.dispatch(todoListActions.fetchTodos());

export default store;
