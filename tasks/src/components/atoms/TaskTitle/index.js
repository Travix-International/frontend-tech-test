import React from 'react'
import PropTypes from 'prop-types'

const TaskTitle = ({ children }) => {
  return (<h2>{children}</h2>)
}

TaskTitle.propTypes = {
  children: PropTypes.string
}

export default TaskTitle
