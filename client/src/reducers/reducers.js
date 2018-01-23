import * as types from '../constants/ActionTypes';

const initTasksState = [];

//declare the tasks reducer
const tasks = (state = initTasksState, action) => {
    switch (action.type) {
        case types.GET_TASKS:
            return state.concat(action.tasks)
        case types.ADD_TODO:
            return [
                ...state,
                {
                   id: state.length ? state[state.length -1]['id'] + 1 : 0,
                   title: action.title,
                   description: action.desc
                }
            ]
        case types.DELETE_TODO:
            return [
                ...state.filter(task => task.id !== action.id)
            ]
        default:
            return state;
    }
}
export default tasks;

//declare more reducers as needed below