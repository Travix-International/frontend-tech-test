/* global document */
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { LoadedTodoList } from './Components';
import reducer from './app.ducks';
import './app.scss';

const store = createStore(reducer);

const App = () => <LoadedTodoList />;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
