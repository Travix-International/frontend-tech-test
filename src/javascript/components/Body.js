import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';

class Body extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { todos, todoActions } = this.props;

    return (
      <section>
        <TodoFilter setVisibilityFilter={todoActions.setVisibilityFilter} />
        <ul>{todos.map(todo => <TodoItem key={todo.id} todo={todo} {...todoActions} />)}</ul>
      </section>
    );
  }
}

Body.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  todoActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Body;
