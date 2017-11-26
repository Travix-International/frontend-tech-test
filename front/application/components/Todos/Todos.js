import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import { observe, streamProps } from 'frint-react'

import List from 'components/List'
import { getTasks } from 'application/reducers/task/getTasksReducer'
import { createTask } from 'application/reducers/task/createTaskReducer'

import './Todos.less'

const bem = bemClassName.bind(null, 'todos')

class Todos extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getTasks()
  }

  render() {
    const { tasks, createTask } = this.props

    return (
      <div className={bem('container')}>
        <h1 className={bem('title')}>TODO LIST</h1>
        <List tasks={tasks} createTask={createTask} />
      </div>
    );
  }
}

export default observe(app => (
  streamProps({})
    .set( app.get('store').getState$(), state => ({ tasks: state.task.tasks }) )
    .setDispatch({ getTasks, createTask }, app.get('store'))
    .get$()
))(Todos)
