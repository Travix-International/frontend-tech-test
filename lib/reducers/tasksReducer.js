import * as types from '../actions/actionTypes';

/**
 * Reducer for a single task
 *
 * state: object
 * action: object
 *
 * Handles:
 * Creation of a new task
 * Updating an individual task
 */
export const taskReducer = (state = null, action) => {
  switch (action.type) {
    case types.CREATE_TASK_SUCCESS:
      return action.task;

    case types.UPDATE_TASK_SUCCESS:
      if (state._id === action._id) {
        return {
          ...state,
          ...action.updates,
        };
      }
      return state;

    default:
      return state;
  }
};

/**
 * Reducer for a all tasks
 *
 * state: array
 * action: object
 *
 * Handles:
 * Creation of a new task
 * Updating tasks
 * Removal of tasks
 * Adding new tasks sent by server
 */
const tasksReducer = (state = [], action) => {
  /* Modifying state by copying arrays with massive list of tasks
   * can get inefficient in terms of space and time.
   * Consider using better data structures like Immutable.js */
  switch (action.type) {
    case types.CREATE_TASK_SUCCESS:
      return [...state, taskReducer(undefined, action)];

    case types.UPDATE_TASK_SUCCESS:
      return state.map(task => taskReducer(task, action));

    case types.ADD_TASKS:
      return action.tasks;

    case types.REMOVE_TASK_SUCCESS:
      return state.filter(task => task._id !== action._id);

    default:
      return state;
  }
};

export default tasksReducer;
