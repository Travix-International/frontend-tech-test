/**
 * @fileoverview reducer to manage delete actions.
 */
import actionTypes from './../../constants/actionTypes';

export const initialState = {
  isDeleting: false,
  id: '',
  deleteFailed: false,
  deleteError: '',
  deleteMessage: ''
}

export const destroy = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TASK.DELETE_TASK.DELETE_START:
      return {
        ...state,
        isDeleting: true,
        id: action.id
      }
    case actionTypes.TASK.DELETE_TASK.DELETE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        deleteMessage: action.data.message
      }
    case actionTypes.TASK.DELETE_TASK.DELETE_FAILED:
      return {
        ...state,
        isDeleting: false,
        deleteFailed: true,
        deleteError: action.data.message
      }
    default:
      return state;
  }
};
