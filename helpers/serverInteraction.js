import 'whatwg-fetch';

const serverUrl = 'http://localhost:9001';
const todoEndpoint = `${serverUrl}/task`;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=utf-8',
};

const checkStatus = status => (resp) => {
  if (resp.status === status) {
    return resp.json();
  }

  const error = new Error(resp.statusText);
  error.response = resp;
  throw error;
};

export const addTodo = (title, description) => fetch(todoEndpoint, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    title,
    description,
  }),
}).then(checkStatus(201));

export const deleteTodo = id => fetch(`${todoEndpoint}/${id}`, {
  method: 'DELETE',
}).then(checkStatus(200));

export const getTodos = () => fetch(`${serverUrl}/tasks`).then(checkStatus(200));

export const updateTodo = (id, title, description) => {
  return fetch(`${todoEndpoint}/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      title,
      description,
    }),
  }).then(checkStatus(200));
};
