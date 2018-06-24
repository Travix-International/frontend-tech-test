const axios = require('axios');

const baseURL = process.env.NODE_ENV === 'production' ? 'https://test-candidates-rqgmdyliie.now.sh' : '//localhost:9001';

export const createTask = ({ title, description }) => dispatch => (
  axios.post(`${baseURL}/task/create/${title}/${description}`)
    // Wait until the "id" is created
    .then(res => dispatch({
      type: 'CREATE_TASK',
      data: res.data.task,
    }))
);

export const deleteTask = id => (dispatch) => {
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

export const toggleTask = id => (dispatch) => {
  axios.put(`${baseURL}/task/toggle_state/${id}`)
  return dispatch({
    type: 'TOGGLE_TASK',
    data: { id },
  });
};

export const listTasks = (page = 1) => dispatch => (
  axios.get(`${baseURL}/tasks?limit=10&page=${page}`)
    .then(res => dispatch({
      type: 'LIST_TASKS',
      page: res.data.page,
      total: res.data.total,
      limit: res.data.limit,
      data: res.data.tasks,
    }))
);
