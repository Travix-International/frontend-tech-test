import {FILTERS, FETCH } from './types';


export const setVisibilityFilter = filter => {
    return {
        type: FILTERS.FILTER_BY,
        payload: filter
    }
};


export function fetchingFailed(bool) {
    return {
        type: FETCH.FETCH_FAILED,
        payload: {
            hasErrored: bool
        }
    };
}

export function isLoading(bool) {
    return {
        type: FETCH.IS_LOADING,
        payload: bool
    };
}

export function fetchDataSuccess(items) {
    return {
        type: FETCH.FETCH_DONE,
        payload: items
    };
}
export function fetchTasks() {
    return (dispatch) => {
        dispatch(isLoading(true));

        fetch('/tasks')
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

export function addTodo(title, description = 'dummy desc') {
    return (dispatch) => {

        fetch(`/task/create/${title}/${description}`, {method: 'POST'})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchTasks()))
            .catch(() => dispatch(fetchingFailed(true)));
    };
}

export function updateTodo(id, title, completed) {
    return (dispatch) => {
        fetch(`/task/update/${id}/${title}/${completed}`, {method: 'PUT'})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchTasks()))
            .catch(() => dispatch(fetchingFailed(true)));
    };
}