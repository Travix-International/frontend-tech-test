import {FILTERS, TODO_ACTIONS} from './types';

let nextTodoId = 0;
export const addNewTodo = text => {
    return {
        type: TODO_ACTIONS.ADD_TODO,
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: FILTERS.FILTER_BY,
        filter
    }
};

export const toggleTodo = id => {
    return {
        type: FILTERS.TOGGLE_TODO,
        id
    }
};
