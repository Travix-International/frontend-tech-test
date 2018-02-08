import { createAction } from 'redux-actions';

import todoListActions from './todoListActions';

const CHANGE_PAGE = 'CHANGE_PAGE';
const TOGGLE_PAGINATION = 'TOGGLE_PAGINATION';

const changePage = createAction(CHANGE_PAGE, (pageNumber, pageSize) =>
  dispatch => {
    dispatch(todoListActions.fetchTodos(pageNumber, pageSize));
    return {
      pageNumber
    };
  });

const togglePagination = createAction(TOGGLE_PAGINATION, (pageNumber, pageSize) =>
  dispatch => {
    dispatch(todoListActions.fetchTodos(pageNumber, pageSize));
  });

export default {
  changePage,
  togglePagination
};
