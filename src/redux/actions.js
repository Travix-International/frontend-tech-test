import fetch from 'isomorphic-fetch';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const REQUEST_ADD_TASK = 'REQUEST_ADD_TASK';
export const RECEIVE_ADD_TASK = 'RECEIVE_ADD_TASK';
export const REQUEST_EDIT_TASK = 'REQUEST_EDIT_TASK';
export const RECEIVE_EDIT_TASK = 'RECEIVE_EDIT_TASK';
export const FAIL_EDIT_TASK = 'FAIL_EDIT_TASK';
export const REQUEST_DELETE_TASK = 'REQUEST_DELETE_TASK';
export const RECEIVE_DELETE_TASK = 'RECEIVE_DELETE_TASK';
export const FAIL_DELETE_TASK = 'FAIL_DELETE_TASK';
export const DRAFT_TASK = 'DRAFT_TASK';
export const DISCARD_DRAFT = 'DISCARD_DRAFT';
export const FILTER_TASKS = 'FILTER_TASKS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const requestTasks = () => ({
  type: REQUEST_TASKS
});

const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks,
  receivedAt: Date.now()
});

const requestAddTask = task => ({
  type: REQUEST_ADD_TASK,
  task
});

const receiveAddTask = task => ({
  type: RECEIVE_ADD_TASK,
  task
});

const requestEditTask = task => ({
  type: REQUEST_EDIT_TASK,
  task
});

const receiveEditTask = task => ({
  type: RECEIVE_EDIT_TASK,
  task
});

const failEditTask = task => ({
  type: FAIL_EDIT_TASK,
  task
});

const requestDeleteTask = task => ({
  type: REQUEST_DELETE_TASK,
  task
});

const receiveDeleteTask = task => ({
  type: RECEIVE_DELETE_TASK,
  task
});

const failDeleteTask = task => ({
  type: FAIL_DELETE_TASK,
  task
});

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(requestTasks());

    return fetch('/tasks')
      .then(response => response.json())
      .then(json => dispatch(receiveTasks(json.tasks)));
  };
};

export const addTask = (task) => {
  return (dispatch) => {
    dispatch(requestAddTask(task));

    const title = encodeURIComponent(task.title);
    const description = encodeURIComponent(task.description);

    return fetch(`/task/create/${title}/${description}`, { method: 'POST' })
      .then(response => response.json())
      .then(json => dispatch(receiveAddTask(Object.assign({}, task, { id: json.id }))));
  };
};

export const editTask = (task) => {
  return (dispatch) => {
    dispatch(requestEditTask(task));

    const title = encodeURIComponent(task.title);
    const description = encodeURIComponent(task.description);

    return fetch(`/task/update/${task.id}/${title}/${description}`, { method: 'PUT' })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(() => dispatch(receiveEditTask(task)))
      .catch(() => dispatch(failEditTask(task)));
  };
};

export const deleteTask = (task) => {
  return (dispatch) => {
    dispatch(requestDeleteTask(task));

    return fetch(`/task/delete/${task.id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(() => dispatch(receiveDeleteTask(task)))
      .catch(() => dispatch(failDeleteTask(task)));
  };
};

export const draftTask = () => ({
  type: DRAFT_TASK
});

export const discardDraft = () => ({
  type: DISCARD_DRAFT
});

export const filterTasks = filterText => ({
  type: FILTER_TASKS,
  filterText
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
