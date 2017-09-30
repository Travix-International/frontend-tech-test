import React from 'react'
import PropTypes from 'prop-types'

const TaskTitleInput = ({ value, handleSubmit, handleChange }) => {
  return (
    <input
      value={value}
      onBlur={handleSubmit}
			onChange={handleChange}
    />
  )
}

TaskTitleInput.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default TaskTitleInput
