import './styles/styles.scss';

import React from 'react';
import { render } from 'react-dom';

// All store creation specific code is located in ./create-store.js
import createStore from './create-store'
import App from './App/Container'

const store = createStore()

render(
  <App store={store}/>,
  document.getElementById('app')
)