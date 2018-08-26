import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { ListItem, Spinner } from '../UI'
import styles from './List.scss'

class List extends Component {
  onTaskSelect = id => {
    const { selectTask } = this.props
    selectTask(id)
  }

  render() {
    const { tasks, loading, deleteTask, selectedTask, saveTask } = this.props
    let tasksList = <Spinner />
    if (tasks.length !== 0 && !loading) {
      tasksList = (
        <TransitionGroup>
          {tasks.map(task => (
            <CSSTransition
              key={task.id}
              timeout={300}
              classNames={{
                exit: `${styles.Exit}`,
                exitActive: `${styles.Exit_Active}`,
              }}
            >
              <ListItem
                title={task.title}
                desc={task.description}
                deleteTask={deleteTask}
                saveTask={saveTask}
                selectedTask={selectedTask}
                length={tasks.length}
                selected={selectedTask === task.id}
                onClick={() => this.onTaskSelect(task.id)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )
    }
    if (tasks.length === 0 && !loading) {
      tasksList = (
        <div>
          Your ToDo list is empty. Please add a new Task or just seat and enjoy
          the live
          <span role="img" aria-label="palm">
            🌴
          </span>
        </div>
      )
    }
    return <div className={styles.List}>{tasksList}</div>
  }
}

List.defaultProps = {
  selectedTask: null,
  loading: null,
  deleteTask: null,
  selectTask: null,
  saveTask: null,
}

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  deleteTask: PropTypes.func,
  saveTask: PropTypes.func,
  selectTask: PropTypes.func,
  selectedTask: PropTypes.number,
}

export default List
