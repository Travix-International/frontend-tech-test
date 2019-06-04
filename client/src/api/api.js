import openSocket from 'socket.io-client';

import * as apiActions from './actions';
import * as storeActions from '../store/actionTypes';

let socket;

export const startConnection = (store) => {
  socket = openSocket('http://localhost:9001');

  socket.on(storeActions.ALL_TASKS, (tasks) => {
    store.dispatch({ type: storeActions.ALL_TASKS, tasks });
  });

  socket.on(storeActions.TASK_ADDED, (task) => {
    store.dispatch({ type: storeActions.TASK_ADDED, task });
  });

  socket.on(storeActions.TASK_UPDATED, (task) => {
    store.dispatch({ type: storeActions.TASK_UPDATED, task });
  });

  socket.on(storeActions.TASK_DELETED, (id) => {
    store.dispatch({ type: storeActions.TASK_DELETED, id });
  });
};

const api = () => ({
  getTasks: () => {
    socket.emit(apiActions.GET_TASKS, {});
  },
  addTask: (title, description) => {
    socket.emit(apiActions.ADD_TASK, { title, description });
  },
  updateTask: (updatedTask) => {
    socket.emit(apiActions.UPDATE_TASK, updatedTask);
  },
  deleteTask: (id) => {
    socket.emit(apiActions.DELETE_TASK, id);
  },
});

export const taskApi = api();
