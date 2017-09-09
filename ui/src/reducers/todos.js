/**
 * Created by maykinayki on 9/9/17.
 */

import {actionsList} from "../actions/todos";

const initialState = [];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case actionsList.INIT_TODO_APP:
            return action.data;

        case actionsList.ADD_TODO:
            return [
                ...state,
                {
                    id: action.data.id,
                    title: action.data.title,
                    description: action.data.description,
                    done: false
                }
            ];

        case actionsList.UPDATE_TODO_BY_ID:
            return state.map(todo =>
                todo.id === action.id ? {...todo, ...action.data, mode: 'default'} : todo
            );

        case actionsList.CHANGE_TODO_MODE_BY_ID:
            return state.map(todo =>
                todo.id === action.id ? {...todo, mode: action.mode} : {...todo, mode: 'default'}
            );

        case actionsList.DELETE_TODO_BY_ID:
            return [
                ...state.filter(_=>_.id !== action.id)
            ];

        case actionsList.TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        default:
            return state
    }
};

export default todos;