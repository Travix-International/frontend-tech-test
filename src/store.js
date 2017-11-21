import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger()
const middleware = [
  thunk,
  loggerMiddleware
];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store