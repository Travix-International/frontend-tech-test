import actionTypes from '../actions/actionTypes';

const initialState = {
    taskLoaded: false,
    deleteID: '',
    editedTask: null,
    tasks: [],
};

const tasksReducer = (tasksState = initialState, action) => {
    switch (action.type) {

        //GET
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

        //SAVE
        case actionTypes.SAVE_TASK_REQUEST:
            return {
                ...tasksState,
            };
        case actionTypes.SAVE_TASK_SUCCESS:
            return {
                ...tasksState,
            };
        case actionTypes.SAVE_TASK_ERROR:
            return {
                ...tasksState,
            };

         //DELETE
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

        //UPDATE
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
                            return task;
                        }
                        return {
                            ...task,
                            ...tasksState.editedTask
                        };
                    })
            };
        case actionTypes.UPDATE_TASK_ERROR:
            return {
                ...tasksState,
                editedTask: null,
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