import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {FILTERS,  FETCH } from '../actions/types';


export function todoReducer(state = {
    visibilityFilter: false,
    fetchingFailed: false,
    fetchDataSuccess: false,
    isLoading: false,
    todos: []
}, action) {

    switch (action.type) {
        case FETCH.FETCH_FAILED:
            return Object.assign({}, state, {
                fetchingFailed: action.payload.hasErrored
            });
        case FETCH.FETCH_DONE:
            return Object.assign({}, state, {
                todos: [...action.payload.tasks]
            });
        case FILTERS.TOGGLE_TODO:
            let newState = Object.assign({}, state);

            let idx = newState.todos.findIndex(todo => todo.id === action.payload);
            let todo = {...newState.todos[idx], completed: !newState.todos[idx].completed};
            let newTodos = [
                ...newState.todos.slice(0, idx),
                ...newState.todos.slice(idx + 1)
            ];
            newTodos.splice(idx, 0, todo);

            return Object.assign({}, state, {
                todos: newTodos
            });
        case FILTERS.FILTER_BY:
            return Object.assign({}, state, {
                visibilityFilter: action.payload
            });
        default:
            return state
    }

    return state;
}


const rootReducer = combineReducers({
    todoStore: todoReducer,
    routing
});

export default rootReducer;
