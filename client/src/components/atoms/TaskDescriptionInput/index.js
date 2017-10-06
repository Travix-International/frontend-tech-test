import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import withSubmitHandler from '../../hocs/withSubmitHandler'

const TaskDescriptionInput = ({ value, handleChange, handleSubmit }) => {
  return (
    <input
      className='task-description-input'
      placeholder='Type the task description...'
      value={value}
			onChange={handleChange}
      onKeyPress={handleSubmit}
    />
  )
}

TaskDescriptionInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default withSubmitHandler(TaskDescriptionInput)
