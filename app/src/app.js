import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './router';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

const root = document.getElementById('root');

render(<App />, root);
