import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Task from './Task'
import TaskForm from './TaskForm'

import './List.less'

const bem = bemClassName.bind(null, 'list')

class List extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    createTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired
  }

  renderTask(task, index) {
    const { deleteTask, editTask } = this.props
    return (<Task task={task} key={index} deleteTask={deleteTask} editTask={editTask} />)
  }

  render() {
    const { tasks, createTask } = this.props

    const renderedItens = tasks.map(this.renderTask.bind(this))

    return (
      <ul className={bem('container')}>
        {renderedItens}
        <TaskForm createTask={createTask} />
      </ul>
    );
  }
}

export default List
