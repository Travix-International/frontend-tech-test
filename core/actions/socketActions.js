
import {
  INITIAL_ITEMS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from '../constants';

export const initialItems = res => ({
  type: INITIAL_ITEMS,
  tasks: res,
});

export function AddTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}
export function deleteTask(task) {
  return {
    type: DELETE_TASK,
    payload: task,
  };
}
export function editTask(task) {
  return {
    type: EDIT_TASK,
    payload: task,
  };
}


export const initSocket = socket => (dispatch) => {
  socket.on('initialList', (res) => {
    dispatch(initialItems(res));
  });
};
export const taskAddedListener = socket => (dispatch) => {
  socket.on('taskAdded', (task) => {
    dispatch(AddTask(task));
  });
};
export const taskDeletedListener = socket => (dispatch) => {
  socket.on('taskDeleted', (task) => {
    dispatch(deleteTask(task));
  });
};
export const taskEditedListener = socket => (dispatch) => {
  socket.on('taskEdited', (task) => {
    dispatch(editTask(task));
  });
};

export const addTaskSocket = (socket, task) => () => {
  socket.emit('addTask', task);
};
export const deleteTaskSocket = (socket, task) => () => {
  socket.emit('deleteTask', task);
};
export const editTaskSocket = (socket, task) => () => {
  socket.emit('editTask', task);
};
