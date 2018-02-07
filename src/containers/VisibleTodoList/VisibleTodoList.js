import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from '../../components/TodoList/';

import todoListActions from '../../actions/todoListActions';

const mapStateToProps = state => ({
  isLoading: state.server.isAwaitingServer,
  todos: state.todoList.todos
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onTodoClick: todoListActions.toggleTodo
}, dispatch);

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
