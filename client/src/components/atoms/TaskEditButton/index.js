import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TaskEditButton = ({ onClick }) => {
  return (
    <button className='task-edit-button' onClick={onClick}>
      edit
    </button>
  )
}

TaskEditButton.propTypes = {
  onClick: PropTypes.func
}

export default TaskEditButton
