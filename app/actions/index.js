import {FILTERS, TODO_ACTIONS, FETCH } from './types';

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
export function fetchingFailed(bool) {
    return {
        type: 'FETCHING_FAILED',
        hasErrored: bool
    };
}

export function isLoading(bool) {
    return {
        type: 'IS_LOADING',
        isLoading: bool
    };
}

export function fetchDataSuccess(items) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        items
    };
}
export function fetchTasks(url) {
    return (dispatch) => {
        dispatch(isLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(isLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchDataSuccess(items)))
            .catch(() => dispatch(fetchingFailed(true)));
    };
}