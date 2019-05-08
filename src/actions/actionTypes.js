const createActionTypes = actions => {
  const actionMap = {};
  actions.forEach(act => actionMap[act] = act);
  return actionMap;
};

const taskActions = [
  'FETCH_ALL_TASKS_REQUEST',
  'FETCH_ALL_TASKS_SUCCESS',
  'FETCH_ALL_TASKS_FAIL',
  'ADD_TASK_REQUEST',
  'ADD_TASK_SUCCESS',
  'ADD_TASK_FAIL',
  'EDIT_TASK_REQUEST',
  'EDIT_TASK_SUCCESS',
  'EDIT_TASK_FAIL',
  'DELETE_TASK_REQUEST',
  'DELETE_TASK_SUCCESS',
  'DELETE_TASK_FAIL',
  'TOGGLE_TASK_REQUEST',
  'TOGGLE_TASK_SUCCESS',
  'TOGGLE_TASK_FAIL',
];

const filterActions = [
  'SET_TASK_VISIBILITY'
];

const searchActions = [
  'SEARCH_TASK_REQUEST',
  'SEARCH_TASK_SUCCESS',
  'SEARCH_TASK_FAIL',
  'CLEAR_SEARCH'
];

export const taskActionTypes = createActionTypes(taskActions);
export const filterActionTypes = createActionTypes(filterActions);
export const searchActionTypes = createActionTypes(searchActions);