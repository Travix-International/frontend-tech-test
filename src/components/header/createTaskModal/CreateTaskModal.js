import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import TextArea from 'components/shared/textArea'
import { MAX_TASK_NAME_LENGTH, MAX_TASK_DESCRIPTION_LENGTH } from 'constants'
import { TASK_STATUSES } from 'constants/taskStatuses'

class CreateTaskModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }
  }

  onCreate = () => {
    const { name, description } = this.state
    this.props.createTask({
      name: name.trim(),
      description: description.trim(),
      status: TASK_STATUSES.TODO
    })
    this.props.toggle()
  }

  setName = (value) => {
    this.setState({ name: value })
  }

  setDescription = (value) => {
    this.setState({ description: value })
  }

  validate = () => {
    const { name } = this.state
    const errors = {}
    if (!name.trim()) {
      errors.name = 'Name is required'
    }
    return errors
  }

  canCreate = (errors) => {
    const canCreate = Object.keys(errors).length === 0
    return canCreate
  }

  render() {
    const { title, toggle } = this.props
    const errors = this.validate()
    return (
      <Modal isOpen toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className="update-task-modal">
          <label htmlFor="editName">Name</label>
          <TextArea
            id="editName"
            maxLength={MAX_TASK_NAME_LENGTH}
            onChange={this.setName}
            value={this.state.name}
          />
          <label htmlFor="editDescription">Description</label>
          <TextArea
            id="editDescription"
            maxLength={MAX_TASK_DESCRIPTION_LENGTH}
            onChange={this.setDescription}
            value={this.state.description}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          <Button color="primary" disabled={!this.canCreate(errors)} onClick={this.onCreate}>Create</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

CreateTaskModal.propTypes = {
  title: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired
}

CreateTaskModal.defaultProps = {
  title: 'Create Task'
}

export default CreateTaskModal
