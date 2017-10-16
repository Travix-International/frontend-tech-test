import React, { Component } from 'react'

import './TodoList.css'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    const { todo } = this.props

    this.setState({ tasks: todo.tasks[0] })
  }

  render() {
    const { tasks } = this.state

    return (
      <ul className="todolist">
        {tasks && tasks.map((t, key) => (
          <li className="todolist-item" key={key}>
            <span className="todolist-item-complete">
              <button className="todolist-item-complete-button" aria-label="Complete task">Complete Task</button>
            </span>

            <span className="todolist-item-content">
              <h4 className="todolist-item-name">{ t.title }</h4>
              <p className="todolist-item-desc">{ t.description }</p>
            </span>

            <span className="todolist-item-remove">
              <button className="todolist-item-remove-button" aria-label="Remove task">&times;</button>
            </span>
          </li>
        ))}
      </ul>
    )
  }
}
