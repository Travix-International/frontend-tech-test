import { taskActionTypes as at } from '../actions/actionTypes';
import { normalizeTasks } from '../utils/normalizeTasks';

const tasks = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case at.FETCH_ALL_TASKS_SUCCESS:
      const tasks = normalizeTasks(paylaod);
      return {
        ...state,
        tasks
      };
    case at.ADD_TASK_SUCCESS:
    case at.EDIT_TASK_SUCCESS:
      return {
        ...state,
        payload
      };
    case at.TOGGLE_TASK_SUCCESS:
      const task = state[payload];
      const newTask = Object.assign({}, task, { completed: !task.completed });
      return {
        ...state,
        newTask
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
