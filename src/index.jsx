import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'normalize.css';

import reducer from './reducer/index.js';
import App from './components/app.jsx';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/:filter?' component={ App } />
    </Router>
  </Provider>,
  document.getElementById('app')
);
