import React from 'react'
import PropTypes from 'prop-types'

const TaskSubmitButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Submit
    </button>
  )
}

TaskSubmitButton.propTypes = {
  onClick: PropTypes.func
}

export default TaskSubmitButton
