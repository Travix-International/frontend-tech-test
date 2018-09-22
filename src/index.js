import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'),
    );
    if (process.env.NODE_ENV === 'development') {
        module.hot.accept('./components/App/App', () => {
            ReactDOM.render(
                    <Provider store={store}>
                        <App />
                    </Provider>,
                document.getElementById('root'),
            );
        });
    }

registerServiceWorker();
