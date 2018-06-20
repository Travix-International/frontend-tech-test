const { get } = require('axios');

const baseURL = '//localhost:9001';

export const createTask = ({ title, description }) => ({
  type: 'CREATE_TASK',
  title,
  description,
});

export const listTasks = () => (dispatch) => (
  get(`${baseURL}/tasks`)
    .then(res => dispatch({
      type: 'LIST_TASKS',
      data: res.data.tasks,
    }))
);