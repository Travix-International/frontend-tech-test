import * as types from '../actions/actionTypes';

/* Reducer to toggle loading indicator on async operations */
const fetchingReducer = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_TASKS:
      return action.isFetching;

    default:
      return state;
  }
};

export default fetchingReducer;
