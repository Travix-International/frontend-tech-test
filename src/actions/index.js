const axios = require('axios');

const baseURL = '//localhost:9001';

export const createTask = ({ title, description }) => (dispatch) => (
  axios.post(`${baseURL}/task/create/${title}/${description}`)
    .then(res => dispatch({
      type: 'CREATE_TASK',
      data: res.data.task,
    }))
    .then(() => dispatch(listTasks()))
);

export const deleteTask = (id) => (dispatch) => (
  axios.delete(`${baseURL}/task/delete/${id}`)
    .then(res => dispatch({
      type: 'DELETE_TASK',
    }))
    .then(() => dispatch(listTasks()))
);

export const updateTask = ({ id, title, description }) => (dispatch) => (
  axios.put(`${baseURL}/task/update/${id}/${title}/${description}`)
    .then(res => dispatch({
      type: 'UPDATE_TASK',
      id,
    }))
);

export const listTasks = () => (dispatch) => (
  axios.get(`${baseURL}/tasks`)
    .then(res => dispatch({
      type: 'LIST_TASKS',
      data: res.data.tasks,
    }))
);