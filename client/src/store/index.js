import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { history } from 'history'
import rootSaga from 'sagas'
import rootReducer from 'reducers'

const router = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, router))

export const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)
