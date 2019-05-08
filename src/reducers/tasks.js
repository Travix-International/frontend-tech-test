import { taskActionTypes as at } from '../actions/actionTypes';
import { normalizeTasks } from '../utils/normalizeTasks';

const tasks = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case at.FETCH_ALL_TASKS_SUCCESS:
      const tasks = normalizeTasks(payload);
      return {
        ...tasks
      };
    case at.ADD_TASK_SUCCESS:
      return {
        [payload.id]: payload,
        ...state
      };
    case at.EDIT_TASK_SUCCESS:
      const updatedTask = Object.assign({}, state[payload.id], payload);
      return {
        ...state,
        [updatedTask.id]: updatedTask
      };
    case at.TOGGLE_TASK_SUCCESS:
      const oldTask = state[payload];
      const toggledTask = Object.assign({}, oldTask, { completed: !oldTask.completed });
      return {
        ...state,
        [toggledTask.id]: toggledTask
      };
    case at.DELETE_TASK_SUCCESS:
      delete state[payload];
      return {
        ...state
      };
    default: 
      return state;
  }
};

export default tasks;
