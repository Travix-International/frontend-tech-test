import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const render = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(render, document.getElementById('root'));
registerServiceWorker();
