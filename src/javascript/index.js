/* global document */

import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppConnect from './containers/App';
import store from './store';

// import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <AppConnect />
  </Provider>,
  document.querySelector('[data-app-entry]'),
);

// registerServiceWorker();
