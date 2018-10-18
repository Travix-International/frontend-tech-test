import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './components/app';
import { initSocketConnection } from './actions/actionCreator';
import { Provider } from 'react-redux';

window.store = store;
initSocketConnection(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});