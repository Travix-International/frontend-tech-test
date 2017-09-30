import React, { Component } from 'react'

import TaskList from '../TaskList/index'
import TaskCreator from '../TaskCreator/index'

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
