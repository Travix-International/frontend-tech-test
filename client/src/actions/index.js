import axios from 'axios';

import { FETCH_TASKS, ADD_TASK, DELETE_TASK } from './types';

const API_URL = 'http://localhost:9001';

export function fetchTasks() {
  return (dispatch) => {
    axios.get(`${API_URL}/tasks`)
      .then(({ data }) => {
        dispatch({
          type: FETCH_TASKS,
          payload: data.tasks,
        });
      })
      .catch(() => {
        console.log('error');
      })
  };
}

export function addTask({ title, description }) {
  return (dispatch) => {
    axios.post(`${API_URL}/task/create/${title}/${description}`)
      .then(({ data }) => {
        dispatch(fetchTasks());
      })
      .catch(() => {
        console.log('error');
      })
  };
}

export function deleteTask(id) {
  return (dispatch) => {
    axios.delete(`${API_URL}/task/delete/${id}`)
      .then(({ data }) => {
        dispatch(fetchTasks());
      })
      .catch(() => {
        console.log('error');
      })
  };
}

export function updateTask({ id, title, description }) {
  return (dispatch) => {
    console.log('oi');
    axios.put(`${API_URL}/task/update/${id}/${title}/${description}`)
      .then(() => {
        dispatch(fetchTasks());
      })
      .catch((error) => {
        console.log(error);
      })
  };
}
