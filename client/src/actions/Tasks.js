import Fetch from 'utils/Fetch'

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CREATE_TASK = 'CREATE_TASK';

export const deleteTask = (tasks, id) => {
  if (id) Fetch('DELETE', `task/delete/${id}`);
  return {
    type: DELETE_TASK,
    payload: tasks
  };
};

export const createTask = (tasks, title) => {
  const request = title ? Fetch('POST', `task/create/${title}`) : null;
  return {
    type: CREATE_TASK,
    payload: request
  };
};

export const updateTask = (tasks, task) => {
  if (task) Fetch('PUT', `task/update/${task.id}/${task.title}/${task.description}`);
  return {
    type: UPDATE_TASK,
    payload: tasks
  };
};

export const toggleTask = (tasks, id) => {
  if (id) Fetch('PATCH', `task/update/${id}`)
  return {
    type: TOGGLE_TASK,
    payload: tasks
  };
};

export const fetchTasks = () => {
  const request = Fetch('GET', 'tasks')

  return {
    type: FETCH_TASKS,
    payload: request
  };
};
