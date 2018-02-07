import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './components/App'
import reducer from './reducers'
import './stylesheets/main'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const initialState = {}
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)