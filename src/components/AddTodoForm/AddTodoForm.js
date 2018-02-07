import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, reset } from 'redux-form';

import TodoForm from "../TodoForm/";

const afterSubmit = (result, dispatch) => dispatch(reset('addTodo'));

function AddTodoForm(props) {
  return (
    <TodoForm {...props} />
  );
}

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addTodo',
  onSubmitSuccess: afterSubmit
})(AddTodoForm);
