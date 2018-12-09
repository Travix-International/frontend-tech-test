import actionTypes from "../../constants/actionTypes";

// initial state of the application
export const initialState = {
  isUpdating: false,
  id: '',
  error: ''
};

export const update = (state = initialState, action) => {
  switch (action.type) {
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
        error: ''
      }
    case actionTypes.TASK.UPDATE_TASK.UPDATE_FAILED:
      return {
        ...state,
        isUpdating: false,
        id: action.id,
        error: action.error.message
      }
    default:
      return state;
  }
};

