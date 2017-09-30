import React from 'react'
import PropTypes from 'prop-types'

const TaskDeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Delete
    </button>
  )
}

TaskDeleteButton.propTypes = {
  onClick: PropTypes.func
}

export default TaskDeleteButton
