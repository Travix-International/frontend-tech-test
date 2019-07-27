import { combineReducers } from 'redux';
import todoReducer from '../apps/reducers';

const rootReducer = combineReducers({
    todos: todoReducer
});

export default rootReducer;
