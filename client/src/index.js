import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App/App'
import tasksReducer from './store/reducers/tasksReducer'

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const rootReducer = combineReducers({
  tasks: tasksReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

if (module.hot) {
  module.hot.accept()
}
