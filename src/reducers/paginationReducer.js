import { handleActions } from 'redux-actions';

import todoListActions from '../actions/todoListActions';
import paginationActions from '../actions/paginationActions';

// setting temporarily a constant page size, should implement a component to change page size
const PAGE_SIZE = 10;

const defaultState = {
  pageNumber: 0,
  pageSize: PAGE_SIZE,
  totalTodos: 0,
  totalPages: 0
};

const paginationReducer = handleActions({
  [todoListActions.fetchTodosSuccess]: (state, action) => {
    return {
      ...state,
      totalTodos: action.payload.totalTodos,
      totalPages: action.payload.totalPages
    };
  },
  [paginationActions.changePage]: (state, action) => {
    return {
      ...state,
      pageNumber: action.payload.pageNumber
    };
  },
  [paginationActions.togglePagination]: state => {
    return {
      ...state,
      pageNumber: state.pageNumber > 0 ? 0 : 1
    };
  }
}, defaultState);

export default paginationReducer;
