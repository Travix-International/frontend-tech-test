import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import App from './components/App/App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

library.add(fab, faTimes);

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
