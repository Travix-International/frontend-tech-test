import React, { Component } from 'react'

import './TodoList.css'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  render() {
    const { todo } = this.props

    return (
      <ul className="todolist">
        {todo.tasks[0] && todo.tasks[0].map((t, key) => (
          <li className="todolist-item" key={key}>
            <span className="todolist-item-complete">
              <button className="todolist-item-complete-button" aria-label="Complete task">
                <span role="img" aria-label="Complete task">👍</span>
              </button>
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
