import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TaskTitleInput = ({ value, handleChange }) => {
  return (
    <input
      className='task-title-input'
      placeholder='Type the task title...'
      value={value}
			onChange={handleChange}
    />
  )
}

TaskTitleInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default TaskTitleInput
