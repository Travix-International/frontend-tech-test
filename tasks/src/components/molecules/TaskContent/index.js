import React from 'react'
import PropTypes from 'prop-types'

import TaskTitle from '../../atoms/TaskTitle/index'
import TaskDescription from '../../atoms/TaskDescription/index'
import TaskDeleteButton from '../../atoms/TaskDeleteButton/index'

const TaskContent = ({ id, title, description, enableEdit, deleteTask }) => {
  return (
    <li key={id} onDoubleClick={enableEdit}>
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
      <TaskDeleteButton onClick={deleteTask} />
    </li>
  )
}

TaskContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  enableEdit: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskContent
