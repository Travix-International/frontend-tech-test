/**
 * Created by NarsFam on 08.07.2017.
 */
import * as types from '../actions/types';

const todos = (state = [], action) => {
    switch (action.type) {
        case types.TODO_ACTIONS.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case types.FILTERS.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state
    }
};

export  default todos;
