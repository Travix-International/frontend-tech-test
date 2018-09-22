import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import createSagaMiddleware, {END} from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {

    let composeEnhancers;
    let middleware;

    if (process.env.NODE_ENV === 'development') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        middleware = applyMiddleware(thunk, createLogger());
    } else {
        composeEnhancers = compose;
        middleware = applyMiddleware(thunk);
    }

    const store = createStore(
        rootReducer,
        composeEnhancers(middleware),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}