import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/travix-ui-kit/dist/ui-bundle.css';
import '../node_modules/travix-ui-kit/dist/theme.css';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import ConnectedApp from './components/app/ConnectedApp';

ReactDOM.render(
  <Provider store = { configureStore (process.env.NODE_ENV) }>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
