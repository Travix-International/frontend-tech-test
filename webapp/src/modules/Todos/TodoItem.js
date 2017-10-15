import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  deleteTodo = (id) => (e) => {
    e.preventDefault();
    this.props.deleteTodo(id);
  }

  toggleTodo = (id) => (e) => {
    this.props.updateTodo(id, { done: e.target.checked   });
  }

  render() {
    const { todo } = this.props;
    return (
      <li className='todo-item'>
        <input type='checkbox' onChange={this.toggleTodo(todo.id)} defaultChecked={todo.done}/>
        <span>{todo.title}</span>: <span>{todo.description}</span>&nbsp;
        <a href='' onClick={this.deleteTodo(todo.id)}>D</a>
      </li>
    );
  }
}

export default TodoItem;
