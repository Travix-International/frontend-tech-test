const editTodo = (todos, item) => {
    return todos.map((todo) => {
        if (todo.id !== item.id) {
            return todo;
        }

        return {
            ...todo,
            ...item,
        };
    });
};

const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case 'TODOS_FETCH_SUCCESS':
        return [...payload.todos];
    case 'TODO_ADD_SUCCESS':
        return [{ ...payload }, ...state];
    case 'TODO_DELETE_SUCCESS':
        return state.filter(todo => todo.id !== payload.id);
    case 'TODO_EDIT_SUCCESS': {
        return editTodo(state, payload);
    }
    default:
        return state;
    }
};

export default todos;
