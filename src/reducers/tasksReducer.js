import actionTypes from '../actions/actionTypes';

const initialState = {
    taskLoaded: false,
    deleteID: '',
    editedTask: null,
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
            return {
                ...tasksState,
                tasks: tasksState.tasks.filter( (item) => item.id !== tasksState.deleteID ),
                deleteID: '',
            };
        case actionTypes.DELETE_TASK_ERROR:
            return {
                ...tasksState,
                deleteID: ''
            };
        case actionTypes.UPDATE_TASK_REQUEST:
            return {
                ...tasksState,
                editedTask: action.payload,
        };
        case actionTypes.UPDATE_TASK_SUCCESS:
                return {
                    ...tasksState,
                    tasks: tasksState.tasks.map(
                        (task, id) => {
                            if(id !== tasksState.editedTask.id) {
                            // This isn't the item we care about - keep it as-is
                            return task;
                        }
                        // Otherwise, this is the one we want - return an updated value
                        return {
                            ...task,
                            ...tasksState.editedTask
                        };
                    })
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