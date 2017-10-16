import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions'

import './TodoList.css'
import '../../containers/todoboard/TodoBoard.css'

const LOCAL_STORAGE_NAME = 'todoManagerCompleted'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      completed:  this.getCompleted(),
      shownItems: 5,
      reachedBottom: false
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

  incrementShownItems() {
    const { shownItems, reachedBottom } = this.state
    const { todo } = this.props

    const increment = 5

    const newShownItems = shownItems + increment <= todo.tasks.length ? shownItems + increment : todo.tasks.length
    this.setState({ shownItems: newShownItems })

    if(!reachedBottom && newShownItems === todo.tasks.length) {
      this.setState({ reachedBottom: true })
    }
  }

  renderTasks() {
    const { todo } = this.props
    const { shownItems, reachedBottom } = this.state

    let rows = []
    let tasks = todo.tasks.slice().reverse()

    for(let k = 0; k < shownItems; k++) {
      rows.push(
        <li className="todolist-item" key={k}>
          <span className="todolist-item-complete">
            <button
              className={`
                todolist-item-complete-button
                ${this.isCompleted(tasks[k].id)
                  ? 'todolist-item-complete-button-marked'
                  : 'todolist-item-complete-button-unmarked'
                }
              `}
              aria-label="Complete task"
              onClick={() => this.handleComplete(tasks[k].id)}>
                <i className="glyphicon glyphicon-ok" aria-label="Complete task"></i>
            </button>
          </span>

          <span className="todolist-item-content">
            <h4 className="todolist-item-name">{ tasks[k].title }</h4>
            <p className="todolist-item-desc">{ tasks[k].description }</p>
          </span>

          <span className="todolist-item-remove">
            <button
              className="todolist-item-remove-button"
              aria-label="Remove task"
              onClick={() => this.handleRemove(tasks[k].id)}>
                <i className="glyphicon glyphicon-remove" aria-label="Remove task"></i>
            </button>
          </span>
        </li>
      )
    }

    return (
      <div>
        <div className="todo-box todo-box-big-padding">
          <ul className="todolist">
            { todo.tasks && rows }
          </ul>
        </div>

        { !reachedBottom &&
          <button className="todolist-load-more" onClick={() => this.incrementShownItems()}>Load More</button>
        }
      </div>
    )
  }

  renderEmpty() {
    return (
      <div className="todo-box todo-box-big-padding">
        <img src="https://i.imgur.com/6Kmg87X.gif" className="img-responsive" alt="You've completed all your tasks. Congrats!" />
      </div>
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
