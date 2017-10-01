import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TaskDescription = ({ children }) => {
  return (<span className='task-description'>{children}</span>)
}

TaskDescription.propTypes = {
  children: PropTypes.string
}

export default TaskDescription
