import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const createReduxStore = () => createStore(reducer, applyMiddleware(thunk));

export default createReduxStore;
