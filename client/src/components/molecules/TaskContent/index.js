import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import TaskTitle from '../../atoms/TaskTitle/index'
import TaskDescription from '../../atoms/TaskDescription/index'
import TaskDeleteButton from '../../atoms/TaskDeleteButton/index'
import TaskEditButton from '../../atoms/TaskEditButton/index'

const TaskContent = ({ title, description, editTask, deleteTask }) => {
  return [
    <div key='taskContentInputs' className='task-content-inputs'>
      <TaskTitle>
        {title}
      </TaskTitle>
      <TaskDescription>
        {description}
      </TaskDescription>
    </div>,
    <div key='taskContentActions' className='task-content-actions'>
      <TaskEditButton onClick={editTask} />
      <TaskDeleteButton onClick={deleteTask} />
    </div>
  ]
}

TaskContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskContent
