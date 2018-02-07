import axios from 'axios';

const server = 'http://localhost:9001';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=utf-8'
};

const addTodo = (title, description) =>
  axios.post(`${server}/task/create/${title}/${description}`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });

const deleteTodo = id =>
  axios.delete(`${server}/task/delete/${id}`, { headers })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });

const getTodos = () =>
  axios.get(`${server}/tasks`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });

const toggleTodo = id =>
  axios.put(`${server}/task/toggle/${id}`, JSON.stringify({}), { headers })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });

const updateTodo = (id, title, description) =>
  axios.put(`${server}/task/update/${id}/${title}/${description}`, JSON.stringify({}), { headers })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });

export default {
  addTodo,
  deleteTodo,
  getTodos,
  toggleTodo,
  updateTodo
};
