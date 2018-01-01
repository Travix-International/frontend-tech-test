export function fetchTodosRequest(payload) {
    return {
        type: 'TODOS_FETCH_REQUEST',
        payload,
    };
}

export function fetchTodosSuccess(payload) {
    return {
        type: 'TODOS_FETCH_SUCCESS',
        payload,
    };
}

export function fetchTodosFailed(payload) {
    return {
        type: 'TODOS_FETCH_FAILED',
        payload,
    };
}

export function addTodoRequest(payload) {
    return {
        type: 'TODO_ADD_REQUEST',
        payload,
    };
}

export function addTodoSuccess(payload) {
    return {
        type: 'TODO_ADD_SUCCESS',
        payload,
    };
}

export function addTodoFailed(payload) {
    return {
        type: 'TODO_ADD_FAILED',
        payload,
    };
}

export function deleteTodoRequest(payload) {
    return {
        type: 'TODO_DELETE_REQUEST',
        payload,
    };
}

export function deleteTodoSuccess(payload) {
    return {
        type: 'TODO_DELETE_SUCCESS',
        payload,
    };
}

export function deleteTodoFailed(payload) {
    return {
        type: 'TODO_DELETE_FAILED',
        payload,
    };
}

export function editTodoStart(payload) {
    return {
        type: 'TODO_EDIT_START',
        payload,
    };
}

export function editTodoRequest(payload) {
    return {
        type: 'TODO_EDIT_REQUEST',
        payload,
    };
}

export function editTodoSuccess(payload) {
    return {
        type: 'TODO_EDIT_SUCCESS',
        payload,
    };
}

export function editTodoFailed(payload) {
    return {
        type: 'TODO_EDIT_FAILED',
        payload,
    };
}

export function editTodoEnd(payload) {
    return {
        type: 'TODO_EDIT_END',
        payload,
    };
}
