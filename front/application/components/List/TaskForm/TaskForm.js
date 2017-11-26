import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './TaskForm.less'

const bem = bemClassName.bind(null, 'task')

class TaskForm extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  handleChange (event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit (event) {
    const { title } = this.state
    event.preventDefault()
    this.props.createTask(title, 'desc')
    this.setState({ title: '' })
  }

  render() {
    return (
      <li className={bem('container')}>
        <form className={bem('form')} onSubmit={this.handleSubmit.bind(this)}>
          <input
            className={bem('field')}
            onChange={this.handleChange.bind(this)}
            value={this.state.title}
            type="text"
            placeholder="Insert your new todo here :)"
            autoFocus="true"
          />
        </form>
      </li>
    )
  }
}

export default TaskForm
