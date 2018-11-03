import axios from 'axios';
import {
  SAVEPENDING,
  SAVEFULFILLED,
  SAVEREJECTED,
  GETREJECTED,
  GETFULFILLED,
  GETPENDING,
  DELETEPENDING,
  DELETEREJECTED,
  DELETEFULFILLED,
} from './TEconstants';
import { SERVER_URL } from '../../Globalconstants';

export const getTask = id => {
  const request = axios.get(`${SERVER_URL}${id}`);
  return dispatch => {
    dispatch({ type: GETPENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: GETFULFILLED, payload: data });
        return data;
      })
      .catch(error => {
        dispatch({
          type: GETREJECTED,
          payload: error.message,
        });
      });
  };
};

export const deleteTask = (id, fn) => {
  const request = axios.delete(`${SERVER_URL}${id}`);
  return dispatch => {
    dispatch({ type: DELETEPENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: DELETEFULFILLED });
        fn();
        return data;
      })
      .catch(error => {
        dispatch({
          type: DELETEREJECTED,
          payload: error.message,
        });
      });
  };
};

export const createTask = task => {
  const request = axios.post(`${SERVER_URL}`, task);
  return dispatch => {
    dispatch({ type: SAVEPENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: SAVEFULFILLED, payload: data });
        return data;
      })
      .catch(error => {
        dispatch({
          type: SAVEREJECTED,
          payload: error.message,
        });
      });
  };
};

export const updateTask = (task, fn) => {
  const request = axios.put(`${SERVER_URL}${task.id}`, task);
  return dispatch => {
    dispatch({ type: SAVEPENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: SAVEFULFILLED, payload: data });
        fn();
        return data;
      })
      .catch(error => {
        dispatch({
          type: SAVEREJECTED,
          payload: error.message,
        });
      });
  };
};
