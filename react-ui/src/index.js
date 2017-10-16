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

require('dotenv').config()

let endpoint = 'http://10.0.10.10:5000'

if (process.env.NODE_ENV === 'production') {
  endpoint = 'https://nl-react-todo-manager.herokuapp.com'
}

export const client = axios.create({
  baseURL: endpoint,
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
