import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'

import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import reducers from './reducers'

import { TodoBoard } from './containers'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './css/layout.css'

export const client = axios.create({
  baseURL: 'http://localhost:9001',
  responseType: 'json'
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger), applyMiddleware(axiosMiddleware(client)))
)

ReactDOM.render(
  <Provider store={store}>
    <TodoBoard />
  </Provider>,
  document.getElementById('root')
)
