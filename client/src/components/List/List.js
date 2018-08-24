import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {ListItem, Spinner} from '../UI'
import styles from './List.scss'

class List extends Component {
  onTaskSelect = id => {
    this.props.selectTask(id)
  }

  render() {
    const {tasks, loading, deleteTask, selectedTask, saveTask} = this.props
    let tasksList = <Spinner />
    if (tasks.length !== 0 && !loading) {
      tasksList = tasks.map(task => (
        <ListItem
          title={task.title}
          desc={task.description}
          key={task.id}
          deleteTask={deleteTask}
          saveTask={saveTask}
          selectedTask={selectedTask}
          length={tasks.length}
          selected={selectedTask === task.id}
          onClick={() => this.onTaskSelect(task.id)}
        />
      ))
    }
    if (tasks.length === 0 && !loading) {
      tasksList = (
        <div>
          Your ToDo list is empty. Please add a new Task or just seat and enjoy
          the live 🌴
        </div>
      )
    }
    return <div className={styles.List}>{tasksList}</div>
  }
}

List.propTypes = {
  tasks: PropTypes.array,
  loading: PropTypes.bool,
  selectTask: PropTypes.func,
  deleteTask: PropTypes.func,
  saveTask: PropTypes.func,
  selectedTask: PropTypes.number
}

export default List
