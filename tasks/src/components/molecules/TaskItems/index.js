import React from 'react'
import PropTypes from 'prop-types'

import TaskItem from '../../molecules/TaskItem/index'

const TaskItems = ({ items, updateTask, deleteTask }) => {
  return (
    <ul className='task-list'>
      {
        items.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              updateTask={updateTask}
              deleteTask={() => { deleteTask({ id: task.id }) }}
            />
          )
        })
      }
    </ul>
  )
}

TaskItems.propTypes = {
  items: PropTypes.array.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskItems
