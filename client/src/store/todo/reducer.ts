import { Reducer } from 'redux';
import TodoState, { initialTodoState } from './state';
import { TodoAction, TodoActionTypes } from './types';

const { FETCH_TODO, FETCH_TODO_FAIL, FETCH_TODO_SUCCESS, ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } = TodoActionTypes;

const todoReducer: Reducer<TodoState, TodoAction> = (state = initialTodoState, action) => {
    switch (action.type) {
        case FETCH_TODO:
            return { ...state, pending: true };

        case FETCH_TODO_FAIL:
            return { ...state, pending: false, error: action.payload.error };

        case FETCH_TODO_SUCCESS:
            return { ...state, pending: false, todos: action.payload.todos };

        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload.todo] };

        case TOGGLE_TODO:
            return {
                ...state, todos: state.todos.map(item =>
                    item.id === action.payload.id ? { ...item, done: !item.done } : item
                ),
            };

        case EDIT_TODO:
            return {
                ...state, todos: state.todos.map(item =>
                    item.id === action.payload.id ? { ...item, title: action.payload.title, description: action.payload.description } : item
                ),
            };

        case DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(item => item.id !== action.payload.id),
            };

        default: return state;
    }
};

export default todoReducer;