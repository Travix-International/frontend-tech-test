import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

import TaskTitleInput from '../../atoms/TaskTitleInput/index'
import TaskDescriptionInput from '../../atoms/TaskDescriptionInput/index'
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
    return [
      <div key='taskFormInputs' className='task-form-inputs'>
        <TaskTitleInput
          value={title}
          handleChange={this.handleTitleChange}
          handleSubmit={this.updateTask}
        />
        <TaskDescriptionInput
          value={description}
          handleChange={this.handleDescriptionChange}
          handleSubmit={this.updateTask}
        />
      </div>,
      <div key='taskFormActions' className='task-form-actions'>
        <TaskSubmitButton onClick={this.updateTask} />
      </div>
    ]
  }
}

TaskForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  updateTask: PropTypes.func.isRequired
}

export default TaskForm
