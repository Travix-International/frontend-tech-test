import React, { PureComponent } from 'react';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { btnTextUpdate, modalTitleUpdate } from '../constants';
import '../style/TaskItem.scss';

class TaskItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    // TODO: can be bindAll with underscore library if
    // if there is more usage for this
    this.onUpdate = this.onUpdate.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onUpdate(task) {
    const { handleUpdate } = this.props;
    handleUpdate(task);
    this.closeModal();
  }

  onRemove() {
    this.props.handleRemove(this.props.task);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { task } = this.props;

    return (
      <li className="TaskItem">
        <div className="content">
          <span className="title">{task.title}</span>
          <span className="desc">{task.description}</span>
        </div>
        <div className="actions">
          <button className="icon-btn change-btn" onClick={this.openModal} />
          <button className="icon-btn remove-btn" onClick={this.onRemove} />
        </div>
        <Modal
          modalTitle={modalTitleUpdate}
          showModal={this.state.showModal}
          closeModal={this.closeModal}>
          <TaskForm btnText={btnTextUpdate} taskDetails={task} onSubmit={this.onUpdate} />
        </Modal>
      </li>
    );
  }
}

export default TaskItem;
