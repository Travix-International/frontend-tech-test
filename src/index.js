/* global document */
/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__", "__REDUX_DEVTOOLS_EXTENSION__"] }] */
/* eslint comma-dangle: ["error", {"functions": "never"}] */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/App/';

import '../assets/css/style.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
