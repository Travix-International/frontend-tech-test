import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import withSubmitHandler from '../../hocs/withSubmitHandler'

const TaskTitleInput = ({ value, handleChange, handleSubmit }) => {
  return (
    <input
      className='task-title-input'
      placeholder='Type the task title...'
      value={value}
			onChange={handleChange}
      onKeyPress={handleSubmit}
    />
  )
}

TaskTitleInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default withSubmitHandler(TaskTitleInput)
