import 'whatwg-fetch';

const serverUrl = 'http://localhost:9001';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=utf-8',
};

export const getTodoList = () =>
  fetch(`${serverUrl}/tasks`)
    .then(callback(200));

export const getTodoById = (id) =>
  fetch(`${serverUrl}/task/${id}`)
    .then(callback(200));

export const addTodo = (title, description) =>
  fetch(`${serverUrl}/task/create/${title}/${description}`, {
    method: 'POST',
    headers,
  }).then(callback(201));

export const deleteTodo = (id) =>
  fetch(`${serverUrl}/task/delete/${id}`, {
    method: 'DELETE',
  }).then(callback(200));

export const updateTodo = (id, title, description) =>
  fetch(`${serverUrl}/task/update/${id}/${title}/${description}`, {
    method: 'PUT',
    headers,
  }).then(callback(204));

const callback = status => (resp) => {
  if (resp.status === status) {
    return resp.json();
  }

  const error = new Error(resp.statusText);
  error.response = resp;
  throw error;
};