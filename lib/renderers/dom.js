/* eslint no-undef: "error" */
/* eslint-env browser */

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import configStore from '../store/configStore';
import App from '../components/App';
import sockets from '../sockets';

// eslint-disable-next-line no-underscore-dangle
const store = configStore(window.__PRELOADED_STATE__);
sockets(store.dispatch);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
