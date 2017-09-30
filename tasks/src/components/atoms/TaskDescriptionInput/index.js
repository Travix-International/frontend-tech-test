import React from 'react'
import PropTypes from 'prop-types'

const TaskDescriptionInput = ({ value, handleChange, handleSubmit }) => {
  return (
    <input
      value={value}
      onBlur={handleSubmit}
			onChange={handleChange}
    />
  )
}

TaskDescriptionInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default TaskDescriptionInput
