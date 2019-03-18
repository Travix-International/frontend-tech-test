import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { Waypoint } from 'react-waypoint';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  _renderItems(todos) {
    return (
      <ul id="todos-list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={this.props.toggleTodo.bind(this, todo.id)}
          />
        ))}
      </ul>
    );
  }

  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <div className="scroll-container">
        {this._renderItems(todos, toggleTodo)}
        <Waypoint onEnter={this.props.fetchTodos} threshold={2.0} />
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
