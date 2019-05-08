import { searchActionTypes as st } from '../actions/actionTypes';

const search = (state = {}, action) => {
  const { type, payload } = action;
  if (type === st.SEARCH_TASK_REQUEST) {
    return {
      ...state,
      query: payload
    };
  } else if (type === st.SEARCH_TASK_SUCCESS) {
    return {
      ...state,
      results: payload
    }
  } else if (type === st.CLEAR_SEARCH) {
    return {
      ...state,
      query: ''
    };
  }

  return state;
};

export default search;

