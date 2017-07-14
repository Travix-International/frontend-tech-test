import {FILTERS, TODO_ACTIONS, FETCH } from './types';

let nextTodoId = 0;
export const addNewTodo = text => {
    return {
        type: TODO_ACTIONS.ADD_TODO,
        payload: {
            id: nextTodoId++,
            text
        }
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: FILTERS.FILTER_BY,
        payload: filter
    }
};

export const toggleTodo = id => {
    return {
        type: FILTERS.TOGGLE_TODO,
        payload: id
    }
};
export function fetchingFailed(bool) {
    return {
        type: 'FETCHING_FAILED',
        payload: {
            hasErrored: bool
        }
    };
}

export function isLoading(bool) {
    return {
        type: 'IS_LOADING',
        payload: bool
    };
}

export function fetchDataSuccess(items) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: items
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