/* eslint-disable no-underscore-dangle, import/no-extraneous-dependencies */
import { createStore, compose, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { createEpicMiddleware } from 'redux-observable'
// import thunk from 'redux-thunk'

import rootReducer from 'SRC/reducers'
import rootEpic from 'SRC/epics'

const epicMiddleware = createEpicMiddleware(rootEpic)

if (module.hot) {
  module.hot.accept('SRC/epics', () => {
    epicMiddleware.replaceEpic(require('SRC/epics').default) // eslint-disable-line
  })
}

function configureStoreProd(initialState) {
  const middlewares = [
    // Add other middleware on this line...
    epicMiddleware,
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    // thunk,
  ]

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  )
}

function configureStoreDev(initialState) {
  const middlewares = [
    // Add other middleware on this line...
    epicMiddleware,

    // Redux middleware that spits an error on you
    // when you try to mutate your state either inside
    // a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument
    // to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    // thunk,
  ]

  // add support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('SRC/reducers', () => {
      const nextReducer = require('SRC/reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
