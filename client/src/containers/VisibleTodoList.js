import { connect } from 'react-redux';

import { toggleTodo, fetchTodos } from '../actions';
import TodoList from '../components/TodoList';
import { Filters } from '../actions/filterTypes';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos;
    case Filters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${  filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
