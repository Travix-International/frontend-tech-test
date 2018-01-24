import * as types from '../constants/ActionTypes';

const initTasksState = [];

//declare the tasks reducer
export const tasks = (state = initTasksState, action) => {
    switch (action.type) {
        case types.GET_TASKS:
            return [...action.tasks]

        case types.ADD_TODO:
            return [
                ...state,
                {
                   id: state.length ? state[state.length -1]['id'] + 1 : 0,
                   title: action.title,
                   description: action.description,
                   completed: false
                }
            ]

        case types.MODIFY_TODO:
            //const tasks = [...this.state];
            let index = state.findIndex((item) => item.id === action.id);
            ////task.title = action.title;
            ////task.description = action.description;
            //task.completed = action.completed;
            return [
                ...state.slice(0, index),
                {...state[index], completed: action.completed},
                ...state.slice(index + 1)
            ]

        case types.DELETE_TODO:
            return state.filter(task => task.id !== action.id)

        default:
            return state;
    }
}

//declare more reducers as needed below
export const editqueue = (state = [], action) => {
    switch(action.type) {
        case types.EDIT_MODE:
            return [...state, action.id]
        default:
            return state;
    }
}