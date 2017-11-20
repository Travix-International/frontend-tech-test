import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTasks, editTask, deleteTask } from '../actions'

import Task from '../components/Task/Task'

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.tasks && this.props.tasks.map(task => (
          <Task {...task}
            editTask={this.props.editTask}
            editingTask={this.props.editingTask}
            deleteTask={this.props.deleteTask}
            key={task.id}
          />
        ))
      }
      </ul>
    )
  }
}

const mapStateToProps = state => (
  {
    tasks: state.todos.tasks,
    editingTask: state.editingTask
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchTasks, editTask, deleteTask }, dispatch)
)

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList
