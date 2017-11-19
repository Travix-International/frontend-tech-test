import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTasks } from '../actions'
import { deleteTask } from '../actions'

import Item from '../components/Item/Item'

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.tasks && this.props.tasks.map(task => (
          <Item {...task} deleteTask={this.props.deleteTask} key={task.id} />
        ))
      }
      </ul>
    )
  }
}

const mapStateToProps = state => (
  { tasks: state.todos.tasks }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchTasks, deleteTask }, dispatch)
)

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList
