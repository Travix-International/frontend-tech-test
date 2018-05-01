import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const logger = createLogger()

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger)),
)
