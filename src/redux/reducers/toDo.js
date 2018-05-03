import { GET_TODO, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/index';

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
                        complited: false,
                    },
                ],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map(todo => {
                    return (todo.id === action.id)
                        ? { ...todo, complited: !todo.complited }
                        : todo;
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.filter(todo => todo.id !== action.id),
            };
        default:
            return state;
    }
};

export default rootReducer;
