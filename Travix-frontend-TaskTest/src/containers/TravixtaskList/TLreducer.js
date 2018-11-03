import { FETCHFULFILLED, FETCHPENDING } from './TLconstants';

const reducer = (state = { fetching: true }, action) => {
  switch (action.type) {
    case FETCHPENDING:
      return { ...state, fetching: true };
    case FETCHFULFILLED:
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
