import * as types from '../actions/actionTypes';

/* Reducer to toggle completed tasks */
const showCompletedReducer = (state = true, action) => {
  switch (action.type) {
    case types.TOGGLE_SHOW_COMPLETED:
      return !state;

    default:
      return state;
  }
};

export default showCompletedReducer;
