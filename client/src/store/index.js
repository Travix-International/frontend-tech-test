import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

const thunkMiddleware = thunk.default || thunk;

const middlewares = [thunkMiddleware];

const store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middlewares),
    /* eslint no-undef: 0*/
    (__DEV__ && window.devToolsExtension) ? window.devToolsExtension() : f => f
));

export default store;
