import keyMirror from 'keymirror';

let actionTypes = keyMirror({
    //get task
    GET_TASK_REQUEST: null,
    GET_TASK_SUCCESS: null,
    GET_TASK_ERROR: null,

    //save task
    SAVE_TASK_REQUEST: null,
    SAVE_TASK_SUCCESS: null,
    SAVE_TASK_ERROR: null,

    //update task
    UPDATE_TASK_REQUEST: null,
    UPDATE_TASK_SUCCESS: null,
    UPDATE_TASK_ERROR: null,

    //delete task
    DELETE_TASK_REQUEST: null,
    DELETE_TASK_SUCCESS: null,
    DELETE_TASK_ERROR: null,
});

export default actionTypes;
