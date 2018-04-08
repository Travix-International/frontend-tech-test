import axios from 'axios';
import {
  SAVE_TASK_PENDING,
  SAVE_TASK_FULFILLED,
  SAVE_TASK_REJECTED,
  GET_TASK_REJECTED,
  GET_TASK_FULFILLED,
  GET_TASK_PENDING,
  DELETE_TASK_PENDING,
  DELETE_TASK_REJECTED,
  DELETE_TASK_FULFILLED,
} from './constants';
import { SERVER_URL } from '../../constants';

export const getTask = id => {
  const request = axios.get(`${SERVER_URL}${id}`);
  return dispatch => {
    dispatch({ type: GET_TASK_PENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: GET_TASK_FULFILLED, payload: data });
        return data;
      })
      .catch(error => {
        dispatch({
          type: GET_TASK_REJECTED,
          payload: error.message,
        });
      });
  };
};

export const deleteTask = (id, fn) => {
  const request = axios.delete(`${SERVER_URL}${id}`);
  return dispatch => {
    dispatch({ type: DELETE_TASK_PENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: DELETE_TASK_FULFILLED });
        fn();
        return data;
      })
      .catch(error => {
        dispatch({
          type: DELETE_TASK_REJECTED,
          payload: error.message,
        });
      });
  };
};

export const createTask = task => {
  const request = axios.post(`${SERVER_URL}`, task);
  return dispatch => {
    dispatch({ type: SAVE_TASK_PENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: SAVE_TASK_FULFILLED, payload: data });
        return data;
      })
      .catch(error => {
        dispatch({
          type: SAVE_TASK_REJECTED,
          payload: error.message,
        });
      });
  };
};

export const updateTask = task => {
  const request = axios.put(`${SERVER_URL}${task.id}`, task);
  return dispatch => {
    dispatch({ type: SAVE_TASK_PENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: SAVE_TASK_FULFILLED, payload: data });
        return data;
      })
      .catch(error => {
        dispatch({
          type: SAVE_TASK_REJECTED,
          payload: error.message,
        });
      });
  };
};
