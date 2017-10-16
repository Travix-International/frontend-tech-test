import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions'

import './TodoList.css'

const LOCAL_STORAGE_NAME = 'todoManagerCompleted'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      completed:  this.getCompleted()
    }
  }

  setCompleted(completed) {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(completed))

    return true
  }

  getCompleted() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)) || []
  }

  isCompleted(id) {
    const { completed } = this.state

    if(Number.isInteger(id)) {
      let newCompleted = completed
      return newCompleted.includes(id)
    }

    return false
  }

  handleComplete(id) {
    const { completed } = this.state

    if(Number.isInteger(id)) {
      const newCompleted = completed

      if(newCompleted.includes(id)) {
        newCompleted.splice(newCompleted.indexOf(id), 1)
      } else {
        newCompleted.push(id)
      }

      this.setState({ completed: newCompleted })
      this.setCompleted(newCompleted)
    }
  }

  handleRemove(id) {
    const { removeTask } = this.props
    const { completed } = this.state

    const newCompleted = completed

    if(Number.isInteger(id)) {
      newCompleted.splice(newCompleted.indexOf(id), 1)

      removeTask(id)
      
      this.setState({ completed: newCompleted })
      this.setCompleted(newCompleted)
    }
  }

  renderTasks() {
    const { todo } = this.props

    return (
      <ul className="todolist">
        { todo.tasks && todo.tasks.slice().reverse().map((t, key) => (
          <li className="todolist-item" key={key}>
            <span className="todolist-item-complete">
              <button
                className={`
                  todolist-item-complete-button
                  ${this.isCompleted(t.id)
                    ? 'todolist-item-complete-button-marked'
                    : 'todolist-item-complete-button-unmarked'
                  }
                `}
                aria-label="Complete task"
                onClick={() => this.handleComplete(t.id)}>
                  <i className="glyphicon glyphicon-ok" aria-label="Complete task"></i>
              </button>
            </span>

            <span className="todolist-item-content">
              <h4 className="todolist-item-name">{ t.title }</h4>
              <p className="todolist-item-desc">{ t.description }</p>
            </span>

            <span className="todolist-item-remove">
              <button
                className="todolist-item-remove-button"
                aria-label="Remove task"
                onClick={() => this.handleRemove(t.id)}>
                  <i className="glyphicon glyphicon-remove" aria-label="Remove task"></i>
              </button>
            </span>
          </li>
        ))}
      </ul>
    )
  }

  renderEmpty() {
    return (
      <img src="https://i.imgur.com/6Kmg87X.gif" className="img-responsive" alt="You've completed all your tasks. Congrats!" />
    )
  }

  render() {
    const { todo } = this.props

    return (
      <div>
        { todo && todo.tasks.length > 0
          ? this.renderTasks()
          : this.renderEmpty()
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
