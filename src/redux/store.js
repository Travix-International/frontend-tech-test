import { createStore } from 'redux';
import rootReducer from './reducers/toDo';
import initialState from './states/index';

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
