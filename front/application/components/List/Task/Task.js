import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';

import TaskForm from '../TaskForm'

import './Task.less'

const bem = bemClassName.bind(null, 'task')

class Task extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { editing : false }
  }

  deleteTask(){
    const { task, deleteTask } = this.props
    deleteTask(task)
  }

  openTaskEditor() {
    this.setState({ editing: true })
  }

  editTask(title, description) {
    const { task, editTask } = this.props
    editTask(task.id, title, description)
    this.setState({ editing: false })
  }

  render() {
    const { task: { title, description } } = this.props

    if(this.state.editing) {
      return (<TaskForm createTask={this.editTask.bind(this)} title={title} description={description} />)
    }

    return (
      <li className={bem('item')}>
        <div className={bem('remove')} onClick={this.deleteTask.bind(this)}><FaTrash size={20} /></div>
        <div className={bem('edit')} onClick={this.openTaskEditor.bind(this)}><FaEdit size={20} /></div>
        <div className={bem('title')}>{title}</div>
        <div className={bem('description')}>{description}</div>
      </li>
    )
  }
}

export default Task
