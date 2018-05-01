import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { createTask } from 'actions'
import CreateTaskModal from './createTaskModal/CreateTaskModal'

class CreateTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayCreateTaskModal: false
    }
  }

  toggleDisplayCreateTaskModal = () => {
    this.setState(prevState => ({ displayCreateTaskModal: !prevState.displayCreateTaskModal }))
  }

  render() {
    const { displayCreateTaskModal } = this.state

    return (
      <div className="create-task-container">
        <Button
          title="Add task"
          className="btn-transparent"
          onClick={this.toggleDisplayCreateTaskModal}
        >
          <i className="fa fa-plus" />
        </Button>
        {displayCreateTaskModal &&
          <CreateTaskModal
            toggle={this.toggleDisplayCreateTaskModal}
            createTask={this.props.createTask}
          />}
      </div>
    )
  }
}

CreateTask.propTypes = {
  createTask: PropTypes.func.isRequired
}

export default connect(null, {
  createTask
})(CreateTask)
