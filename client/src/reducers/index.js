import { combineReducers } from 'redux';
import fetchTodoReducer from './fetchTodoReducer';
export default combineReducers({
    getTodoList: fetchTodoReducer
});