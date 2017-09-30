import React from 'react'
import PropTypes from 'prop-types'

import TaskTitle from '../../atoms/TaskTitle/index'
import TaskDescription from '../../atoms/TaskDescription/index'

const TaskItem = ({ id, title, description }) => {
  return (
    <li key={id}>
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
    </li>
  )
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskItem
