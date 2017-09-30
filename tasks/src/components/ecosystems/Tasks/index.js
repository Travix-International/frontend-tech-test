import React, { Component } from 'react'

import TaskList from '../../organisms/TaskList/index'
import TaskCreator from '../../organisms/TaskCreator/index'

export default class Tasks extends Component {
  render() {
    return (
      <div>
        <TaskList />
        <TaskCreator />
      </div>
    )
  }
}
