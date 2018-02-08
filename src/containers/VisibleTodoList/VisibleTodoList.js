import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from '../../components/TodoList/';

import todoListActions from '../../actions/todoListActions';
import paginationActions from '../../actions/paginationActions';

const mapStateToProps = state => ({
  todos: state.todoList.todos,
  pageNumber: state.pagination.pageNumber,
  pageSize: state.pagination.pageSize,
  totalPages: state.pagination.totalPages
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onTodoClick: todoListActions.toggleTodo,
  changePage: paginationActions.changePage,
  togglePagination: paginationActions.togglePagination
}, dispatch);

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
