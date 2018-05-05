import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as taskActions from '../../actions/taskActions';
import styles from './TaskModal.scss';
import Modal from '../Modal/Modal';

class Task extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    addModal: PropTypes.bool.isRequired,
    editModal: PropTypes.string,
    tasks: PropTypes.array.isRequired
  };

  static defaultProps = {
    editModal: null
  };

  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.descriptionRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { editModal, actions } = this.props;
    const title = this.titleRef.current.value;
    const description = this.descriptionRef.current.value;
    if (title.trim().length) {
      const task = { title, description };
      if (editModal !== null) {
        actions.updateTask(editModal, task);
      } else {
        actions.createTask(task);
      }
      this.handleModalClose();
    } else {
      this.titleRef.current.focus();
    }
  };

  handleModalClose = () => {
    this.setState({ title: '', description: '' });
    if (this.props.editModal) {
      this.props.actions.toggleEditModal();
    } else {
      this.props.actions.toggleAddModal();
    }
  };

  render() {
    const { editModal, addModal, tasks } = this.props;
    const isEdit = editModal !== null;
    let title = '';
    let description = '';
    const submitButtonText = isEdit ? 'Edit' : 'Add';

    if (isEdit) {
      const task = tasks.find(t => t._id === editModal);
      title = task.title;
      description = task.description;
    }

    return (
      <Modal
        onClose={this.handleModalClose}
        show={addModal || isEdit}
        styles={styles.root}
      >
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.title}
            defaultValue={title}
            id="todo-text"
            name="title"
            placeholder="title"
            ref={this.titleRef}
            type="text"
          />
          <textarea
            className={styles.description}
            defaultValue={description}
            id="todo-description"
            maxLength="140"
            name="description"
            placeholder="description (max 140 characters)"
            ref={this.descriptionRef}
            rows="5"
          />
          <input
            className={styles.button}
            type="submit"
            value={submitButtonText}
          />
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = ({ addModal, editModal, tasks }) => ({
  addModal,
  editModal,
  tasks
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
