/* global */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import './TodoForm.scss';

class TodoForm extends Component {
  constructor() {
    super();
    this.titleFieldValue = '';
    this.descriptionFieldValue = '';
  }

  addTodo(evt) {
    const { addTask } = this.props;

    addTask(this.titleFieldValue.trim(), this.descriptionFieldValue.trim());

    evt.preventDefault();
  }

  render() {
    return (

      <form
        autoComplete="off"
        className="todo-form"
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
    );
  }
}

TodoForm.propTypes = {
  addTask: PropTypes.func
};

export {
  TodoForm as default
};
