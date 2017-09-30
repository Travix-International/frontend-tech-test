import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TaskContent from '../TaskContent/index'
import TaskForm from '../TaskForm/index'

class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editionMode: false
    }
  }

  enableEditionMode = () => {
    this.setState({ editionMode: true })
  }

  disableEditionMode = () => {
    this.setState({ editionMode: false })
  }

  updateTask = (payload) => {
    this.disableEditionMode()
    this.props.updateTask(payload)
  }

  render() {
    if (this.state.editionMode) {
      return (
        <TaskForm
          {...this.props}
          updateTask={this.updateTask}
        />
      )
    }
    return (
      <TaskContent
        {...this.props}
        enableEdit={this.enableEditionMode}
      />
    )
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskItem
