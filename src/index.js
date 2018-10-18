import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/scss/style.scss';
import 'bulma/css/bulma.min.css';
import App from './components/App';
import rootReducer from './reducers';

console.log(rootReducer);
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
