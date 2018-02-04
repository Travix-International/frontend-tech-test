import '../bower_components/normalize-css/normalize.css';
import '../bower_components/font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout';

import store from './store';

const app = document.getElementById('app');

if(app) {
  ReactDOM.render(<Provider store={store}>
    <Layout />
  </Provider>, app);
}