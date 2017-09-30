import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  fetchTasks, updateTask, deleteTask
} from '../../../ducks/modules/tasks'

import TaskItems from '../../molecules/TaskItems/index'

export class Tasks extends Component {
  componentDidMount() {
    this.props.fetchTasks()
  }

  updateTask = (payload) => {
    this.props.updateTask(payload)
  }

  deleteTask = (payload) => {
    this.props.deleteTask(payload)
  }

  render() {
    return (
      <TaskItems
        items={this.props.items}
        updateTask={this.updateTask}
        deleteTask={this.deleteTask}
      />
    )
  }
}

Tasks.propTypes = {
  items: PropTypes.array.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    items: state.tasks.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    updateTask: (payload) => dispatch(updateTask(payload)),
    deleteTask: (payload) => dispatch(deleteTask(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)
