import React from 'react';
import { render } from 'react-dom';

// All store creation specific code is located in ./create-store.js
import createStore from './create-store'
import App from './App/Container'

const store = createStore()
console.log('----store-----');
console.log(store.getState())

render(
  <App store={store}/>,
  document.getElementById('app')
)