import * as types from '../actions/actionTypes';

const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_TASK:
    case types.REMOVE_TASK:
    case types.UPDATE_TASK:
      return true;

    case types.CREATE_TASK_SUCCESS:
    case types.REMOVE_TASK_SUCCESS:
    case types.UPDATE_TASK_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default isLoadingReducer;
