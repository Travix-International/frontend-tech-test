/* global document */
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  ConnectedAddTodo,
  ConnectedTodoList,
  ConnectedTaskDialog,
  ConnectedNotificationSnackBar
} from './Components';
import reducer from './app.ducks';
import './app.scss';

const store = createStore(reducer);

const App = () => (
  <div>
    <ConnectedTodoList />
    <ConnectedAddTodo />
    <ConnectedTaskDialog />
    <ConnectedNotificationSnackBar />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
