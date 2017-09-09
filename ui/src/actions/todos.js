export const actionsList = {
    INIT_TODO_APP: "INIT_TODO_APP",
    ADD_TODO: "ADD_TODO",
    CHANGE_TODO_MODE_BY_ID: "CHANGE_TODO_MODE_BY_ID",
    UPDATE_TODO_BY_ID: "UPDATE_TODO_BY_ID",
    DELETE_TODO_BY_ID: "DELETE_TODO_BY_ID",
    TOGGLE_TODO: "TOGGLE_TODO"
};

export const initTodoApp = (data = []) => {
    return {
        type: actionsList.INIT_TODO_APP,
        data
    }
};

export const addTodo = (data = {}) => {
    return {
        type: actionsList.ADD_TODO,
        data
    };
};

export const changeTodoModeById = (id, mode) => {
    return {
        type: actionsList.CHANGE_TODO_MODE_BY_ID,
        id,
        mode
    };
};

export const updateTodoById = (id, data) => {
    return {
        type: actionsList.UPDATE_TODO_BY_ID,
        id,
        data
    };
};

export const deleteTodoById = (id) => {
    return {
        type: actionsList.DELETE_TODO_BY_ID,
        id
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};