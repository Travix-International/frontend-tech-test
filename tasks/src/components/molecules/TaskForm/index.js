import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TaskTitleInput from '../../atoms/TaskTitleInput/index'
import TaskDescriptionInput from '../../atoms/TaskDescriptionInput/index'
import TaskDeleteButton from '../../atoms/TaskDeleteButton/index'
import TaskSubmitButton from '../../atoms/TaskSubmitButton/index'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      description: props.description
    }
  }

  handleTitleChange = (event) => {
    const title = event.target.value
    this.setState(() => {
      return { title: title }
    })
  }

  handleDescriptionChange = (event) => {
    const description = event.target.value
    this.setState(() => {
      return { description: description }
    })
  }

  updateTask = () => {
    this.props.updateTask({
      id: this.props.id,
      title: this.state.title,
      description: this.state.description
    })
  }

  render() {
    const { title, description } = this.state
    const { id, deleteTask } = this.props
    return (
      <li key={id}>
        <TaskTitleInput
          value={title}
          handleSubmit={this.updateTask}
          handleChange={this.handleTitleChange}
        />
        <TaskDescriptionInput
          value={description}
          handleSubmit={this.updateTask}
          handleChange={this.handleDescriptionChange}
        />
        <TaskSubmitButton onClick={this.updateTask} />
        <TaskDeleteButton onClick={deleteTask} />
      </li>
    )
  }
}

TaskForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskForm
