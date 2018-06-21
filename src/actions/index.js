const { get, post } = require('axios');

const baseURL = '//localhost:9001';

export const createTask = ({ title, description }) => (dispatch) => (
  post(`${baseURL}/task/create/${title}/${description}`)
    .then(res => dispatch({
      type: 'CREATE_TASK',
      data: res.data.task,
    }))
    .then(() => dispatch(listTasks()))
);

export const listTasks = () => (dispatch) => (
  get(`${baseURL}/tasks`)
    .then(res => dispatch({
      type: 'LIST_TASKS',
      data: res.data.tasks,
    }))
);