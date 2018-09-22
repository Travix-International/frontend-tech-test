import actionTypes from '../actions/actionTypes';

const initialState = {
    taskLoaded: false,
    deleteID: '',
    tasks: [],
};

const tasksReducer = (tasksState = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TASK_REQUEST:
            return {
                ...tasksState,
                taskLoaded: false,
            };
        case actionTypes.GET_TASK_SUCCESS:
            return {
                ...tasksState,
                taskLoaded: true,
                tasks: action.payload,
            };
        case actionTypes.GET_TASK_ERROR:
            return {
                ...tasksState,
                taskLoaded: false,
            };
        case actionTypes.SAVE_TASK_SUCCESS:
            return {
                ...tasksState,
            };
        case actionTypes.SAVE_TASK_ERROR:
            return {
                ...tasksState,
            };
        case actionTypes.DELETE_TASK_REQUEST:
            return {
                ...tasksState,
                deleteID: action.payload
            };
        case actionTypes.DELETE_TASK_SUCCESS:
            let removedArray = tasksState.tasks.filter( (item, id) => id !== tasksState.deleteID);
            return {
                ...tasksState,
                deleteID: '',
                tasks: removedArray
            };
        case actionTypes.DELETE_TASK_ERROR:
            return {
                ...tasksState,
                deleteID: ''
            };
        case actionTypes.UPDATE_TASK_SUCCESS:
            return {
                ...tasksState,
            };
        default:
            return tasksState;
    }
};

export default tasksReducer;


/**
 * Returns avalaible tasks
 * @param {*} state
 */

export const selectTasks = (state) => {
    return state.tasks;
};