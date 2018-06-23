const axios = require('axios');

const baseURL = '//localhost:9001';

export const createTask = ({ title, description }) => (dispatch) => (
  axios.post(`${baseURL}/task/create/${title}/${description}`)
    // Wait until the "id" is created
    .then(res => dispatch({
      type: 'CREATE_TASK',
      data: res.data.task,
    }))
);

export const deleteTask = (id) => (dispatch) => {
  axios.delete(`${baseURL}/task/delete/${id}`);
  return dispatch({
    type: 'DELETE_TASK',
    data: { id },
  });
};

export const updateTask = ({ id, title, description }) => (dispatch) => {
  axios.put(`${baseURL}/task/update/${id}/${title}/${description}`)
  return dispatch({
    type: 'UPDATE_TASK',
    data: {
      id,
      title,
      description,
    },
  });
};

export const listTasks = () => (dispatch) => (
  axios.get(`${baseURL}/tasks`)
    .then(res => dispatch({
      type: 'LIST_TASKS',
      data: res.data.tasks,
    }))
);