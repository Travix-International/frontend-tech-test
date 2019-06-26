import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><App /></Provider>,
document.getElementById('root'));
