import { GET_TODO, ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/index';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                toDoList: action.toDoList,
            };
        case ADD_TODO:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    {
                        id: action.id,
                        title: action.title,
                        completed: false,
                    },
                ],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map(todo => {
                    return (todo.id === action.id)
                        ? { ...todo, completed: !todo.completed }
                        : todo;
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.filter(todo => todo.id !== action.id),
            };
        case UPDATE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map(todo => {
                    return (todo.id === action.id)
                        ? { ...todo, title: action.title }
                        : todo;
                }),
            }
        default:
            return state;
    }
};

export default rootReducer;
