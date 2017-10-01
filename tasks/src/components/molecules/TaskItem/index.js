import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

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
        <li
          key={this.props.id}
          className='task-item'
        >
          <TaskForm
            {...this.props}
            updateTask={this.updateTask}
          />
        </li>
      )
    }
    return (
      <li
        key={this.props.id}
        className='task-item'
        onDoubleClick={this.enableEditionMode}
      >
        <TaskContent {...this.props}/>
      </li>
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
