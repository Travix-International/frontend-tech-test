/* global fetch */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { addTask } from '../app.ducks';

const Todo = (props) => {
  const { todo } = props;
  let TodoComponent = <span>{todo.title}</span>;

  if (todo.isDone) {
    TodoComponent = <strike><Button>{todo.title}</Button></strike>;
  }

  return TodoComponent;
};

Todo.propTypes = {
  dispatch: PropTypes.func,
  todo: PropTypes.object
};

class TodoList extends Component {
  constructor() {
    super();
    this.titleFieldValue = '';
    this.descriptionFieldValue = '';
  }

  addTodo(evt) {
    const { dispatch } = this.props;

    fetch(`/task/create/${this.titleFieldValue}/${this.descriptionFieldValue}`, {
      method: 'POST',
    })
      .then(() => {
        dispatch(addTask(
          this.titleFieldValue,
          this.descriptionFieldValue
        ));
      }).catch((ex) => {
        throw new Error('parsing failed', ex);
      });

    evt.preventDefault();
  }

  getListComponents() {
    let components = [];
    const { todos } = this.props;

    todos.forEach((t, k) => {
      components.push(
        <li className="todo__item" key={k}>
          <Todo todo={t} />
        </li>
      );
    });

    return components;
  }

  render() {
    return (
      <div className="todo">
        <form
          autoComplete="off"
          className="todo__form"
          noValidate
          onSubmit={(...args) => this.addTodo(...args)}
        >
          <TextField
            label="Title"
            name="title"
            onChange={(e) => { this.titleFieldValue = e.target.value; }}
            placeholder="Add todo title"
            type="text"
          />
          <TextField
            label="Description"
            multiline
            name="description"
            onChange={(e) => { this.descriptionFieldValue = e.target.value; }}
            placeholder="Add todo description"
            rowsMax="4"
            type="text"
          />
          <Button onSubmit={(...args) => this.addTodo(...args)} type="submit">Add</Button>
        </form>
        <ul className="todo__list">
          {this.getListComponents()}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.object
};

export {
  TodoList as default,
  Todo
};
