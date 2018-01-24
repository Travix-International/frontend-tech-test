import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'redux/reducer'
import rootSaga from 'redux/saga'

const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState = {}) => {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
