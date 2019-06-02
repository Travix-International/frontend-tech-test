import openSocket from 'socket.io-client';

import * as actionTypes from '../store/actions';

let socket;

export const startConnection = (store) => {
  socket = openSocket('http://localhost:9001');

  socket.on('new task added', (task) => {
    store.dispatch({ type: actionTypes.ADD_TASK, task });
  });

  socket.on('task removed', (id) => {
    store.dispatch({ type: actionTypes.REMOVE_TASK, id });
  });
};

const api = () => ({
  addTask: (title, description) => {
    socket.emit('add task', { title, description });
  },
  removeTask: (id) => {
    socket.emit('remove task', id);
  },
});

export const taskService = api();