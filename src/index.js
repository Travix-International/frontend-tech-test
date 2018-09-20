import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { rootSaga } from './sagas';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.runSaga(rootSaga);

        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root'),
        );
        if (process.env.NODE_ENV === 'development') {
            module.hot.accept('./App', () => {
                ReactDOM.render(
                        <Provider store={store}>
                            <App />
                        </Provider>,
                    document.getElementById('root'),
                );
            });
        }

registerServiceWorker();
