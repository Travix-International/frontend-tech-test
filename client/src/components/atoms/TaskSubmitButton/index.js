import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TaskSubmitButton = ({ disabled, onClick }) => {
  const disabledProp = disabled ? 'true' : null
  return (
    <button
      className='task-submit-button'
      disabled={disabledProp}
      onClick={onClick}
    >
      Save
    </button>
  )
}

TaskSubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

export default TaskSubmitButton
