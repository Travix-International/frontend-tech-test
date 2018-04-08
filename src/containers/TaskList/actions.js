import axios from 'axios';
import {
  FETCH_TASKS_FULFILLED,
  FETCH_TASKS_REJECTED,
  FETCH_TASKS_PENDING,
} from './constants';
import { SERVER_URL } from '../../constants';

export const fetchTasks = (currentPage, tasksPerPage) => {
  const request = axios.get(
    `${SERVER_URL}?pn=${currentPage}&tpp=${tasksPerPage}`
  );
  return dispatch => {
    dispatch({ type: FETCH_TASKS_PENDING });
    return request
      .then(({ data }) => {
        dispatch({ type: FETCH_TASKS_FULFILLED, payload: data });
        return data;
      })
      .catch(error => {
        dispatch({
          type: FETCH_TASKS_REJECTED,
          payload: error.message,
        });
      });
  };
};
