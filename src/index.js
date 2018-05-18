import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./js/store/index";
import { addTask } from "./js/actions/index";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.store = store;
window.addTask = addTask;
