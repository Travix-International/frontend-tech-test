import React, { Component } from 'react'

import './TodoFooter.css'

export default class TodoFooter extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  calculateTasks() {
    const { todo } = this.props

    if(todo.tasks[0]) {
      return `There are ${todo.tasks[0].length} tasks waiting to be completed 🚀`
    }

    return 'Houston, we have a problem! 🛰'
  }

  render() {
    return (
      <p className="todofooter">{ this.calculateTasks() }</p>
    )
  }
}
