/**
 * Helper functions
 */

const URL = 'http://localhost:9001';
const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json;charset=utf-8',
};

function get(path) {
  return fetch(`${URL}${path}`);
}

function json(path) {
  return get(path).then(response => response.json());
}

function post(path, body) {
  return fetch(`${URL}${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
}

function put(path, body) {
  return fetch(`${URL}${path}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
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

  post(`/task`, { title: task.title, description: task.description })
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

  put(`/task/${task.id}`, { title: task.title, description: task.description })
    .catch(() => dispatch({ type: 'SHOW_BACKEND_ERROR' }));
};

export const deleteTask = id => (dispatch) => {
  dispatch({
    type: 'DELETE_TASK',
    id,
  });

  del(`/task/${id}`).catch(() => dispatch({ type: 'SHOW_BACKEND_ERROR' }));
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
    .then(tasks => dispatch(receiveTasks(tasks)))
    .catch(err => dispatch(failFetchTasks(err)));
};

export const toggleCompleteTask = id => (dispatch, getState) => {
  dispatch({
    type: 'TOGGLE_COMPLETE_TASK',
    id,
  });

  const { completed } = getState().tasks.data.find(task => task.id === id);
  put(`/task/${id}`, { completed })
    .catch(() => dispatch({
      type: 'TOGGLE_COMPLETE_TASK',
      id,
    }));
};
