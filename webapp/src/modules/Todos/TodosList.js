import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends Component {
  static propTypes = {
    todoActions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
  }

  render() {
    const { todoActions, todos } = this.props;
    return (
      <ul className='todo-list list-group'>
        {
          todos.map((todo) =>
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={todoActions.updateTodo}
              deleteTodo={todoActions.deleteTodo}
            />
          )
        }
      </ul>
    );
  }
}

export default TodosList;
