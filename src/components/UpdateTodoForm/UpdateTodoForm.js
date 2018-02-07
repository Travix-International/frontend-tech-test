import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TodoForm from "../TodoForm/";

function UpdateTodoForm(props) {
  return (
    <TodoForm {...props} />
  );
}

UpdateTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

UpdateTodoForm = reduxForm({
  form: 'updateTodo'
})(UpdateTodoForm);

UpdateTodoForm = connect(
  state => {
    const currentTodo = state.todoList.todos.find(todo => todo.id === state.todoList.editingTodoIndex);
    return {
      initialValues: {
        title: currentTodo.title,
        description: currentTodo.description
      }
    };
  })(UpdateTodoForm);

export default UpdateTodoForm;
