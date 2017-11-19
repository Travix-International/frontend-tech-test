import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App/App'
import './index.css'

let store = applyMiddleware(ReduxThunk)(createStore)(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
