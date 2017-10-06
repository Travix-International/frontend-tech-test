import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

import TaskTitleInput from '../../atoms/TaskTitleInput/index'
import TaskDescriptionInput from '../../atoms/TaskDescriptionInput/index'
import TaskSubmitButton from '../../atoms/TaskSubmitButton/index'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.mapPropsToState(props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => {
      return this.mapPropsToState(nextProps)
    })
  }

  mapPropsToState(props) {
    return {
      title: props.title,
      description: props.description,
      valid: this.isValid(props.title, props.description)
    }
  }

  isValid(title, description) {
    return title && title.length && description && description.length
  }

  handleTitleChange = (event) => {
    const title = event.target.value
    this.setState(() => {
      return {
        title: title,
        valid: this.isValid(title, this.state.description)
      }
    })
  }

  handleDescriptionChange = (event) => {
    const description = event.target.value
    this.setState(() => {
      return {
        description: description,
        valid: this.isValid(this.state.title, description)
      }
    })
  }

  updateTask = () => {
    if (!this.state.valid) {
      return;
    }
    this.props.updateTask({
      id: this.props.id,
      title: this.state.title,
      description: this.state.description
    })
  }

  render() {
    const { title, description, valid } = this.state
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
        <TaskSubmitButton onClick={this.updateTask} disabled={!valid} />
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
