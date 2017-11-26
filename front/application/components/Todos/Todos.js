import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import List from 'application/components/List'

import './Todos.less'

const bem = bemClassName.bind(null, 'todos')

class Todos extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getTasks()
  }

  render() {
    const { tasks, createTask, deleteTask, editTask } = this.props

    return (
      <div className={bem('container')}>
        <h1 className={bem('title')}>TODO LIST</h1>
        <List tasks={tasks} createTask={createTask} deleteTask={deleteTask} editTask={editTask} />
      </div>
    );
  }
}

export default Todos
