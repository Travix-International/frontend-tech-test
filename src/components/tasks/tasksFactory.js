import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tasks from './Tasks'

const checkIsPossibleToAddSubTaskDefault = task => true

export default function tasksFactory(filter, checkIsPossibleToAddSubTask = checkIsPossibleToAddSubTaskDefault) {
  function TasksComponent({ tasks: { items } }) {
    return (
      <Tasks
        tasks={items}
        filter={filter}
        checkIsPossibleToAddSubTask={checkIsPossibleToAddSubTask}
      />
    )
  }

  TasksComponent.propTypes = {
    tasks: PropTypes.object.isRequired
  }

  return connect(
    state => ({
      tasks: state.tasks
    })
  )(TasksComponent)
}
