const loading = (state, action) => {
    const { type } = action;

    switch (type) {
    case 'TODOS_FETCH_REQUEST':
    case 'TODO_ADD_REQUEST':
    case 'TODO_EDIT_REQUEST':
    case 'TODO_DELETE_REQUEST':
        return true;
    case 'TODOS_FETCH_SUCCESS':
    case 'TODOS_FETCH_FAILED':
    case 'TODOS_ADD_SUCCESS':
    case 'TODOS_ADD_FAILED':
    case 'TODO_EDIT_SUCCESS':
    case 'TODOS_EDIT_FAILED':
    case 'TODO_DELETE_SUCCESS':
    case 'TODOS_DELETE_FAILED':
        return false;
    default:
        return false;
    }
};

export default loading;
