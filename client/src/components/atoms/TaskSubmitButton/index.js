import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TaskSubmitButton = ({ onClick }) => {
  return (
    <button className='task-submit-button' onClick={onClick}>
      Save
    </button>
  )
}

TaskSubmitButton.propTypes = {
  onClick: PropTypes.func
}

export default TaskSubmitButton
