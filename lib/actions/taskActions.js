import * as types from './actionTypes';

export const toggleTaskModal = () => {
  return {
    type: types.TOGGLE_TASK_MODAL
  };
};

export const createTask = (task) => {
  return {
    task,
    type: types.CREATE_TASK
  };
};

export const addTasks = (tasks) => {
  return {
    tasks,
    type: types.ADD_TASKS
  };
};

export const fetchTasks = (isFetching) => {
  return {
    isFetching,
    type: types.FETCH_TASKS
  };
};

export const updateTask = (_id, updates) => {
  return {
    _id,
    updates,
    type: types.UPDATE_TASK
  };
};

export const removeTask = (_id) => {
  return {
    _id,
    type: types.REMOVE_TASK
  };
};
