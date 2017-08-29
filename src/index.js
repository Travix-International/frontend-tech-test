import 'normalize.css/normalize.css';
import './styles/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// All store creation specific code is located in ./create-store.js
import createStore from './create-store'
import App from './App/Container'

const store = createStore()


render(
  <Router>
    <App store={store}/>       
  </Router>
  ,
  document.getElementById('app')
)