import { combineReducers } from "redux";
import todoReducer from './todo.reducer';
import { fetchTodo } from '../actions/todo.action';

export const allReducer = combineReducers({
    todo: todoReducer,
});

export const getInitialData = () => {
    return fetchTodo()
}