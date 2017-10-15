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
    return (
      <ul className="todolist">
        <li className="todolist-item">
          <span className="todolist-item-complete">
            <button className="todolist-item-complete-button" aria-label="Complete task">Complete Task</button>
          </span>

          <span className="todolist-item-content">
            <h4 className="todolist-item-name">Task Name</h4>
            <p className="todolist-item-desc">Task Description</p>
          </span>

          <span className="todolist-item-remove">
            <button className="todolist-item-remove-button" aria-label="Remove task">&times;</button>
          </span>
        </li>

        <li className="todolist-item">
          <span className="todolist-item-complete">
            <button className="todolist-item-complete-button" aria-label="Complete task">Complete Task</button>
          </span>

          <span className="todolist-item-content">
            <h4 className="todolist-item-name">Task Name</h4>
            <p className="todolist-item-desc">Task Description</p>
          </span>

          <span className="todolist-item-remove">
            <button className="todolist-item-remove-button" aria-label="Remove task">&times;</button>
          </span>
        </li>

        <li className="todolist-item">
          <span className="todolist-item-complete">
            <button className="todolist-item-complete-button" aria-label="Complete task">Complete Task</button>
          </span>

          <span className="todolist-item-content">
            <h4 className="todolist-item-name">Task Name</h4>
            <p className="todolist-item-desc">Task Description</p>
          </span>

          <span className="todolist-item-remove">
            <button className="todolist-item-remove-button" aria-label="Remove task">&times;</button>
          </span>
        </li>

        <li className="todolist-item">
          <span className="todolist-item-complete">
            <button className="todolist-item-complete-button" aria-label="Complete task">Complete Task</button>
          </span>

          <span className="todolist-item-content">
            <h4 className="todolist-item-name">Task Name</h4>
            <p className="todolist-item-desc">Task Description</p>
          </span>

          <span className="todolist-item-remove">
            <button className="todolist-item-remove-button" aria-label="Remove task">&times;</button>
          </span>
        </li>

        <li className="todolist-item">
          <span className="todolist-item-complete">
            <button className="todolist-item-complete-button" aria-label="Complete task">Complete Task</button>
          </span>

          <span className="todolist-item-content">
            <h4 className="todolist-item-name">Task Name</h4>
            <p className="todolist-item-desc">Task Description</p>
          </span>

          <span className="todolist-item-remove">
            <button className="todolist-item-remove-button" aria-label="Remove task">&times;</button>
          </span>
        </li>
      </ul>
    );
  }
}
