import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import TextArea from 'components/shared/textArea'
import Dropdown from 'components/shared/dropdown'
import { MAX_TASK_NAME_LENGTH, MAX_TASK_DESCRIPTION_LENGTH } from 'constants'
import { TASK_STATUSES_OPTIONS } from 'constants/taskStatuses'
import styles from './updateTaskModal.scss'

class UpdateTaskModal extends Component {
  constructor(props) {
    super(props)

    const { task } = props
    this.state = {
      name: task.name,
      description: task.description,
      dropdownOpen: false,
      status: TASK_STATUSES_OPTIONS.find(x => x.value === task.status)
    }
  }

  onSave = () => {
    const { task } = this.props
    const { name, description, status } = this.state
    this.props.updateTask({
      ...task,
      name: name.trim(),
      description: description.trim(),
      status: status.value
    })
    this.props.toggle()
  }

  onDelete = () => {
    const { task } = this.props
    this.props.deleteTask(task)
    this.props.toggle()
  }

  setName = (value) => {
    this.setState({ name: value })
  }

  setDescription = (value) => {
    this.setState({ description: value })
  }

  setStatus = (value) => {
    this.setState({ status: value })
  }

  dropdownToggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  hasChanges = () => {
    const { task } = this.props
    const { name, description, status } = this.state
    const hasChanges = task.name !== name.trim() ||
      task.description !== description.trim() ||
      task.status !== status.value
    return hasChanges
  }

  validate = () => {
    const { name } = this.state
    const errors = {}
    if (!name.trim()) {
      errors.name = 'Name is required'
    }
    return errors
  }

  canSave = (errors) => {
    const canSave = Object.keys(errors).length === 0 && this.hasChanges()
    return canSave
  }

  render() {
    const { title, toggle } = this.props
    const errors = this.validate()
    return (
      <Modal isOpen toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className={styles['update-task-modal']}>
          <label htmlFor="editStatus">Status</label>
          <div className={styles.dropdown}>
            <Dropdown
              id="editStatus"
              isOpen={this.state.dropdownOpen}
              toggle={this.dropdownToggle}
              options={TASK_STATUSES_OPTIONS}
              value={this.state.status}
              setValue={this.setStatus}
              direction="right"
            />
          </div>
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
          <Button color="info" onClick={this.onDelete}>Delete</Button>
          <Button color="primary" disabled={!this.canSave(errors)} onClick={this.onSave}>Save</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

UpdateTaskModal.propTypes = {
  title: PropTypes.string,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subTasks: PropTypes.array
  }).isRequired,
  toggle: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

UpdateTaskModal.defaultProps = {
  title: 'Update Task'
}

export default UpdateTaskModal
