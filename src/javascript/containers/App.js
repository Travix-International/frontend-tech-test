import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoAdd from '../components/TodoAdd';
import Body from '../components/Body';

import TodoActions from '../actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

// Export App to be able to test it.
export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.todoActions.fetchTodos();
  }

  render() {
    const { todos, todosFilter, todoActions } = this.props;
    let filteredTodos;

    switch (todosFilter.filter) {
      case SHOW_ACTIVE:
        filteredTodos = todos.filter(todo => !todo.completed);
        break;

      case SHOW_COMPLETED:
        filteredTodos = todos.filter(todo => todo.completed);
        break;

      case SHOW_ALL:
      default:
        filteredTodos = todos;
    }

    return (
      <div>
        <TodoAdd
          createTodo={todoActions.createTodo}
          todosLeft={todos.filter(todo => !todo.completed).length}
        />
        <Body todos={filteredTodos} todoActions={todoActions} />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  todosFilter: PropTypes.object.isRequired,
  // shape has empty object as the shape of every action can change drastically.
  todoActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
  todosFilter: state.todosFilter,
});

const mapDispatchToProps = dispatch => ({
  todoActions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
