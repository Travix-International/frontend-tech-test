import { FETCH_TASKS_FULFILLED, FETCH_TASKS_PENDING } from './constants';

const reducer = (state = { fetching: true }, action) => {
  switch (action.type) {
    case FETCH_TASKS_PENDING:
      return { ...state, fetching: true };
    case FETCH_TASKS_FULFILLED:
      return {
        ...state,
        fetching: false,
        tasks: action.payload.tasks,
        pageNumber: action.payload.pageNumber,
        totalRecords: action.payload.totalRecords,
      };
    default:
      return state;
  }
};

export default reducer;
