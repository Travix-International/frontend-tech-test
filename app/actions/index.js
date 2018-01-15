/**
 * Helper functions
 */

const URL = 'http://localhost:9001';

function get(path) {
  return fetch(`${URL}${path}`);
}

function json(path) {
  return get(path).then(response => response.json());
}

/**
 * Actual action creators
 */

export const addTask = task => ({
  type: 'ADD_TASK',
  task,
});

export const editTask = (id, task) => ({
  type: 'EDIT_TASK',
  id,
  task,
});

export const deleteTask = id => ({
  type: 'DELETE_TASK',
  id,
});

const requestTasks = () => ({
  type: 'REQUEST_TASKS',
});

const receiveTasks = tasks => ({
  type: 'RECEIVE_TASKS',
  tasks,
});

const failFetchTasks = error => ({
  type: 'FAIL_FETCH_TASKS',
  error,
});

export const fetchTasks = () => (dispatch) => {
  dispatch(requestTasks());
  return json('/tasks')
    .then(({ tasks }) => dispatch(receiveTasks(tasks)))
    .catch(err => dispatch(failFetchTasks(err)));
};
