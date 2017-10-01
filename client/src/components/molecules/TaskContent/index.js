import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import TaskTitle from '../../atoms/TaskTitle/index'
import TaskDescription from '../../atoms/TaskDescription/index'
import TaskDeleteButton from '../../atoms/TaskDeleteButton/index'

const TaskContent = ({ title, description, deleteTask }) => {
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
      <TaskDeleteButton onClick={deleteTask} />
    </div>
  ]
}

TaskContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskContent
