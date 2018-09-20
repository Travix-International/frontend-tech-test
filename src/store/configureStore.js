import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    let composeEnhancers;
    let middleware;

    if (process.env.NODE_ENV === 'development') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        middleware = applyMiddleware(sagaMiddleware, createLogger());
    } else {
        composeEnhancers = compose;
        middleware = applyMiddleware(sagaMiddleware);
    }

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(middleware),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    store.runSaga = sagaMiddleware.run;
    store.close = () => { return store.dispatch(END); };
    return store;
}