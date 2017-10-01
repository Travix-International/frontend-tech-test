import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TaskTitle = ({ children }) => {
  return (<h2 className='task-title'>{children}</h2>)
}

TaskTitle.propTypes = {
  children: PropTypes.string
}

export default TaskTitle
