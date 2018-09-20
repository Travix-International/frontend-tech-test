import * as Request from './Request';
import apiEndpoints from './apiEndpoints';

/**
 * GET Tasks API call
 *
 * @param {Object} payload
 * @return {*}
 */
export const getTask = (payload = {}) => {
    return Request.getPromise({
        url: `${apiEndpoints.TASK_CALL}/tasks`,
        method: 'GET',
        data: payload,
    }).then((error, response, body) => {
        return body;
    });
};

/**
 * GET Tasks with certain ID API call
 *
 * @param {Object} payload
 * @return {*}
 */
export const getTaskId = (payload = {}) => {
    return Request.getPromise({
        url: `${apiEndpoints.TASK_CALL}/task/${payload.taskId}`,
        method: 'GET',
        data: payload,
    }).then((error, response, body) => {
        return body;
    });
};

/**
 * SAVE Tasks API call
 *
 * @param {Object} payload
 * @return {*}
 */
export const saveTask = (payload = {}) => {
    return Request.getPromise({
        url: `${apiEndpoints.TASK_CALL}/task/create/${payload.title}/${payload.desc}`,
        method: 'POST',
        data: payload,
    }).then((error, response, body) => {
        return body;
    });
};

/**
 * UPDATE Tasks API call
 *
 * @param {Object} payload
 * @return {*}
 */
export const updateTask = (payload = {}) => {
    return Request.getPromise({
        url: `${apiEndpoints.TASK_CALL}/task/update/${payload.taskId}/${payload.title}/${payload.desc}`,
        method: 'PUT',
        data: payload,
    }).then((error, response, body) => {
        return body;
    });
};

/**
 * DELETE Tasks API call
 *
 * @param {Object} payload
 * @return {*}
 */
export const deleteTask = (payload = {}) => {
    return Request.getPromise({
        url: `${apiEndpoints.TASK_CALL}/task/delete/${payload.taskId}`,
        method: 'DELETE',
        data: payload,
    }).then((error, response, body) => {
        return body;
    });
};