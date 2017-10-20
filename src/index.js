import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store';
import './styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
