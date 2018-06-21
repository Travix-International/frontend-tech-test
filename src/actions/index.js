const { get, post } = require('axios');

const baseURL = '//localhost:9001';

export const createTask = ({ title, description }) => {
  post(`${baseURL}/task/create/${title}/${description}`);
  return {
    type: 'CREATE_TASK',
    title,
    description,
  };
};

export const listTasks = () => (dispatch) => (
  get(`${baseURL}/tasks`)
    .then(res => dispatch({
      type: 'LIST_TASKS',
      data: res.data.tasks,
    }))
);