import actionTypes from './actionTypes';

/**
 * Tak actions
 *
 * @returns {*}
 */

export const getTask = (payload = {}) => {
    return {type: actionTypes.GET_TASK_REQUEST, payload};
};
export const saveTask = (payload = {}) => {
    return {type: actionTypes.SAVE_TASK_REQUEST, payload};
};
export const updateTask = (payload = {}) => {
    return {type: actionTypes.UPDATE_TASK_REQUEST, payload};
};
export const deleteTask = (payload = {}) => {
    return {type: actionTypes.DELETE_TASK_REQUEST, payload};
};