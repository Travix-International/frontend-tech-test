import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './app.js'

import './content/styles/global.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  	<App/>
  </Provider>,
  document.getElementById('main')
);