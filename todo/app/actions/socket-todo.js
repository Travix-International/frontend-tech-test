
export function onTodoAdd (todo) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TODO',
            todos: todo.task
        });
    }
}

export function onEditTodo (todo) {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_TODO',
            todos: todo.task
        });
    }
}

export function onDeleteTodo (id) {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_TODO',
            id: id
        });
    }
}