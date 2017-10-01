import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TaskDescriptionInput = ({ value, handleChange }) => {
  return (
    <input
      className='task-description-input'
      placeholder='Type the task description...'
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
