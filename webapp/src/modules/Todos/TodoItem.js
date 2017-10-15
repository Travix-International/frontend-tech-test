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
      <li className='todo-item list-group-item'>
        <input className='toggle-todo' type='checkbox' onChange={this.toggleTodo(todo.id)} defaultChecked={todo.done}/>
        <span className={todo.done ? 'is-done' : ''}><strong>{todo.title}</strong>: {todo.description}</span>
        <a className='delete-todo' href='' onClick={this.deleteTodo(todo.id)}><span className="badge badge-secondary">x</span></a>
      </li>
    );
  }
}

export default TodoItem;
