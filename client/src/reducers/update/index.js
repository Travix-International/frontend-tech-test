import actionTypes from "../../constants/actionTypes";

// initial state of the application
export const initialState = {
  isUpdating: false,
  id: '',
  error: '',
  updating: {}
};

export const update = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TASK.UPDATE_TASK.EDIT_THIS_TASK:
      return {
        ...state,
        updating: action.task 
      }
    case actionTypes.TASK.UPDATE_TASK.CANCEL_EDIT:
      return {
        ...state,
        updating: {}
      }
    case actionTypes.TASK.UPDATE_TASK.UPDATE_START:
      return {
        ...state,
        isUpdating: true,
        id: action.id
      }
    case actionTypes.TASK.UPDATE_TASK.UPDATE_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        id: action.id,
        error: '',
        updating: {}
      }
    case actionTypes.TASK.UPDATE_TASK.UPDATE_FAILED:
      return {
        ...state,
        isUpdating: false,
        id: action.id,
        error: action.error.message,
        updating: {}
      }
    default:
      return state;
  }
};

