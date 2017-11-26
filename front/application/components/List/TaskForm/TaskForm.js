import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './TaskForm.less'

const bem = bemClassName.bind(null, 'task')

class TaskForm extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title || '',
      description: this.props.description || '',
      step: 1
    }
  }

  handleChangeTitle (event) {
    this.setState({ title: event.target.value })
  }

  handleChangeDescription (event) {
    this.setState({ description: event.target.value })
  }

  handleSubmit (event) {
    const { title, description, step } = this.state
    event.preventDefault()

    if(title && step === 1) {
      return this.setState({ step: 2 })
    }

    this.props.createTask(title, description)
    this.setState({ title: '', description: '', step: 1 })
  }

  render() {
    return (
      <li className={bem('container')}>
        <form className={bem('form')} onSubmit={this.handleSubmit.bind(this)}>
          { this.state.step === 1 ?
            <input
              className={bem('field')}
              onChange={this.handleChangeTitle.bind(this)}
              value={this.state.title}
              type="text"
              placeholder="Insert your todo title here :)"
              autoFocus="true"
            /> :
            <input
              className={bem('field')}
              onChange={this.handleChangeDescription.bind(this)}
              value={this.state.description}
              type="text"
              placeholder="Now a description to it"
              autoFocus="true"
            />
          }
        </form>
      </li>
    )
  }
}

export default TaskForm
