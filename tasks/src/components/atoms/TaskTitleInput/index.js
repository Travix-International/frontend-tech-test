import React from 'react'
import PropTypes from 'prop-types'

const TaskTitleInput = ({ value, handleChange }) => {
  return (
    <input
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
