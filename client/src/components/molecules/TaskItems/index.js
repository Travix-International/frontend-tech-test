import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import TaskItem from '../../molecules/TaskItem/index'

import withLoadingIndicator from '../../hocs/withLoadingIndicator'

export const TaskItems = ({ items, updateTask, deleteTask }) => {
  return (
    <div className='task-items'>
      <ul className='task-items-list'>
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
    </div>
  )
}

TaskItems.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default withLoadingIndicator(TaskItems)
