import axios from 'axios';
import actionTypes from './actionTypes';
import apiEndpoints from '../api/apiEndpoints';

/**
 * Tasks actions
 *
 * @returns {*}
 */


//GET TASKS
export const getTask = () =>  {
    return function action(dispatch) {
      dispatch({ type: actionTypes.GET_TASK_REQUEST })

      const request = axios({
        method: 'GET',
        url: `${apiEndpoints.TASK_CALL}/tasks`,
        headers: []
      });
      return request.then(
        response => dispatch(getTaskSuccess(response.data.tasks) ),
        err => dispatch(getTaskError(err))
      );
    }
}

export const getTaskSuccess = (payload = {}) => {
    return {type: actionTypes.GET_TASK_SUCCESS, payload };
};

export const getTaskError = (payload = {}) => {
    return {type: actionTypes.GET_TASK_ERROR, payload };
};




//SAVE TASKS
export const saveTask = (payload) =>  {
    return function action(dispatch) {
      dispatch({ type: actionTypes.SAVE_TASK_REQUEST, payload })
      let { title , description } = payload;
      const request = axios({
        method: 'POST',
        url: `${apiEndpoints.TASK_CALL}/task/create/${title}/${description}`,
        headers: []
      });
      request.then(
        (response) => {
            dispatch(saveTaskSuccess(response))
            dispatch(getTask());
        },
        err => dispatch(saveTaskError(err))
      )
    }
}

export const saveTaskSuccess = (payload = {}) => {
    return {type: actionTypes.SAVE_TASK_SUCCESS, payload };
};

export const saveTaskError = (payload = {}) => {
    return {type: actionTypes.SAVE_TASK_ERROR, payload };
};




//DELETE TASKS
export const deleteTask = (payload) =>  {
    return function action(dispatch) {
      dispatch({ type: actionTypes.DELETE_TASK_REQUEST, payload })
      const request = axios({
        method: 'DELETE',
        url: `${apiEndpoints.TASK_CALL}/task/delete/${payload}`,
        headers: []
      });
      request.then(
        (response) => {
            dispatch(deleteTaskSuccess(response))
            dispatch(getTask());
        },
        err => dispatch(deleteTaskError(err))
      )
    }
}

export const deleteTaskSuccess = (payload = {}) => {
    return {type: actionTypes.DELETE_TASK_SUCCESS, payload };
};

export const deleteTaskError = (payload = {}) => {
    return {type: actionTypes.DELETE_TASK_ERROR, payload };
};


//UPDATE TASKS
export const updateTask = (payload) =>  {
    return function action(dispatch) {
      dispatch({ type: actionTypes.UPDATE_TASK_REQUEST, payload })
      const request = axios({
        method: 'PUT',
        url: `${apiEndpoints.TASK_CALL}/task/update/${payload.id}/${payload.title}/${payload.description}`,
        headers: []
      });
      request.then(
        (response) => {
            dispatch(updateTaskSuccess(response))
            dispatch(getTask());
        },
        err => dispatch(updateTaskError(err))
      )
    }
}

export const updateTaskSuccess = (payload = {}) => {
    return {type: actionTypes.UPDATE_TASK_SUCCESS, payload};
};

export const updateTaskError = (payload = {}) => {
    return {type: actionTypes.UPDATE_TASK_ERROR, payload};
};
