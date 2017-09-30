import React from 'react'
import PropTypes from 'prop-types'

const TaskDescriptionInput = ({ value, handleChange }) => {
  return (
    <input
      value={value}
			onChange={handleChange}
    />
  )
}

TaskDescriptionInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default TaskDescriptionInput
