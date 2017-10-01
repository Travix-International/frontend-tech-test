import React, { Component } from 'react'
import './index.css'

import TaskList from '../../organisms/TaskList/index'
import TaskCreator from '../../organisms/TaskCreator/index'

export default class Tasks extends Component {
  render() {
    return (
      <div className='tasks'>
        <h1 className='tasks-title'>Tasks</h1>
        <TaskCreator />
        <TaskList />
      </div>
    )
  }
}
