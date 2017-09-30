import React from 'react'
import PropTypes from 'prop-types'

const TaskDescription = ({ children }) => {
  return (<span>{children}</span>)
}

TaskDescription.propTypes = {
  children: PropTypes.string
}

export default TaskDescription
