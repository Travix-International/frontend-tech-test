import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/index';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    {
                        id: action.id,
                        text: action.text,
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
