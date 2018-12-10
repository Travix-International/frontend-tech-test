/**
 * @fileoverview reducer to manage create actions.
 */
import actionTypes from "../../constants/actionTypes";

export const initialState = {
  isCreating: false,
  task: {},
  createError: '',
  createFailed: false
};

export const create = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TASK.CREATE_TASK.CREATE_START:
      return {
        ...state,
        isCreating: true
      }
    case actionTypes.TASK.CREATE_TASK.CREATE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        task: action.data.task
      }
    case actionTypes.TASK.CREATE_TASK.CREATE_FAILED:
      return {
        ...state,
        isCreating: false,
        createError: action.error.message,
        createFailed: true
      }
    default:
      return state;
  }
}
