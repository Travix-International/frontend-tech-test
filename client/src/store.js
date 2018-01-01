import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import todos from './reducers/todos';
import popup from './reducers/popup';
import todoForm from './reducers/todoForm';
import loading from './reducers/loading';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({ todos, popup, todoForm, loading }),
    compose(
        applyMiddleware(sagaMiddleware),
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(mySaga);

export default store;
