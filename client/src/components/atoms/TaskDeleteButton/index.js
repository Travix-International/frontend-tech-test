import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TaskDeleteButton = ({ onClick }) => {
  return (
    <button className='task-delete-button' onClick={onClick}>
      x
    </button>
  )
}

TaskDeleteButton.propTypes = {
  onClick: PropTypes.func
}

export default TaskDeleteButton
