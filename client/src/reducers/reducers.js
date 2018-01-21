import * as types from '../constants/ActionTypes';

const initTasksState = [];

//declare the tasks reducer
const tasks = (state = initTasksState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                {id: state.length, title: action.task}
            ]
        default:
            return state;
    }
}
export default tasks;

//declare more reducers as needed below