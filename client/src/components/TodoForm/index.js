import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'

import InputField from 'components/InputField'
import './styles.less'

const TodoForm = ({ handleSubmit, type }) => (
  <form onSubmit={handleSubmit} className="todo-form">
    <div className="form-input-wrapper">
      <Field type="text" name="title" component={InputField} label="Title" />
    </div>
    <div className="form-input-wrapper">
      <Field
        type="text"
        name="description"
        component={InputField}
        label="Description"
      />
    </div>
    <button type="submit" className="submit-form-btn">
      {type}
    </button>
  </form>
)

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default TodoForm
