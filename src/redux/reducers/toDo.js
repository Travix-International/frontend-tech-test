import { ADD_TODO } from '../actions/index';
import { TOGGLE_TODO } from '../actions/index';

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
                        complited: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map(todo => (todo.id == action.id) ? { ...todo, complited: !action.complited } : todo)
            };
        default:
            return state
    }
};

export default rootReducer;