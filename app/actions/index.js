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

function post(path) {
  return fetch(`${URL}${path}`, { method: 'POST' });
}

function put(path) {
  return fetch(`${URL}${path}`, { method: 'PUT' });
}

function del(path) {
  return fetch(`${URL}${path}`, { method: 'DELETE' });
}

/**
 * Actual action creators
 */

export const addTask = task => (dispatch) => {
  dispatch({
    type: 'ADD_TASK',
    task,
  });

  post(`/task/create/${task.title}/${task.description}`)
    .catch(() => {
      dispatch({
        type: 'DELETE_TASK',
        id: task.id,
      });

      dispatch({ type: 'SHOW_BACKEND_ERROR' });
    });
};

export const editTask = task => (dispatch) => {
  dispatch({
    type: 'EDIT_TASK',
    task,
  });

  put(`/task/update/${task.id}/${task.title}/${task.description}`)
    .catch(() => dispatch({ type: 'SHOW_BACKEND_ERROR' }));
};

export const deleteTask = id => (dispatch) => {
  dispatch({
    type: 'DELETE_TASK',
    id,
  });

  del(`/task/delete/${id}`).catch(() => dispatch({ type: 'SHOW_BACKEND_ERROR' }));
};

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
