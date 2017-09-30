import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { createTask } from '../../../ducks/modules/tasks'

import TaskForm from '../../molecules/TaskForm/index'

export class TaskCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      title: '',
      description: ''
    }
  }

  createTask = (payload) => {
    this.props.createTask(payload)
  }

  render() {
    return (
      <TaskForm
        title={this.state.title}
        description={this.state.description}
        updateTask={this.createTask}
      />
    )
  }
}

TaskCreator.propTypes = {
  createTask: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (payload) => dispatch(createTask(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskCreator)
