import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        createLogger()
    )
);

export default store;
