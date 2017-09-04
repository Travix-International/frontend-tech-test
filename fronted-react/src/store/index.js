import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import apiMiddleware from '../middleware/api';
import rootReducer from '../reducers';

let store = createStore(
  rootReducer
  // , thunkMiddleware
  , applyMiddleware(apiMiddleware, thunkMiddleware)
)

export default store;