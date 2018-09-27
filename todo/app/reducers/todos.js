const initialState = {
    tasks: [],
    total: 0
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_TODOS':
            return Object.assign({}, state, {
                tasks: action.todos,
                total: action.total
            });
        case 'ADD_TODO':
            state.tasks.unshift(action.todos);
            return Object.assign({}, state);
        case 'UPDATE_TODO':
            state.tasks.forEach(task => {
                if (task.id === action.todos.id) {
                    task.title = action.todos.title;
                    task.description = action.todos.description;
                }
            });
            return Object.assign({}, state);
        case 'DELETE_TODO':
            const index = state.tasks.findIndex(item => item.id === action.id);
            state.tasks.splice(index, 1);
            return Object.assign({}, state);
        default:
            return state;
    }
}