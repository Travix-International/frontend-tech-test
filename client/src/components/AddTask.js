import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { createTask } from '../actions/tasks';

import Modal from './Modal';
import TaskForm from './TaskForm';
import { btnTextAdd, modalTitleAdd } from '../constants';

import '../style/AddTask.scss';

class AddTask extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  openModal(task) {
    return this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  addTask(taskDetails) {
    const { createTask } = this.props;
    createTask(taskDetails);
    this.closeModal();
  }

  render() {
    return (
      <div className="AddTask">
        <button
          className="cta-btn"
          onClick={this.openModal}>add task
        </button>
        <Modal
          modalTitle={modalTitleAdd}
          showModal={this.state.showModal}
          closeModal={this.closeModal}>
          <TaskForm
            btnText={btnTextAdd}
            onSubmit={this.addTask} />
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (taskDetails) => {
      dispatch(createTask(taskDetails));
    }
  };
};

const ConnectedAddTask = connect(
  undefined,
  mapDispatchToProps
)(AddTask);

export default ConnectedAddTask;
