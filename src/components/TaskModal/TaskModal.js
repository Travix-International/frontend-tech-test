import React, { Component } from "react";
import { Modal } from "react-overlays";
import { bool, func } from "prop-types";

import Button from "../Button";
import Icon from "../Icon";
import Form from "../Form";

import styles from "./TaskModal.scss";

class TaskModal extends Component {
  static propTypes = {
    edit: bool,
    isOpen: bool.isRequired,
    onClose: func.isRequired,
    onSuccess: func.isRequired,
    changeView: func,
  };

  onSuccess = () => this.props.onSuccess();

  render() {
    const { isOpen, onClose, edit } = this.props;

    return (
      <Modal
        className={styles.TaskModal}
        backdropClassName={styles.backdrop}
        show={isOpen}
        onHide={onClose}
      >
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2 className={styles.title}>{edit ? "Edit task" : "Task"}</h2>
            <span className={styles.closeButton}>
              <Icon glyph="x" onClick={onClose} />
            </span>
          </div>

          <div className={styles.body}>
            {edit ? <Form hideSubmit /> : "TODO: task info"}
          </div>

          <div className={styles.footer}>
            {edit ? (
              <Button onClick={this.onSuccess}>Edit task</Button>
            ) : (
              <Icon glyph="pencil" onClick={onClose} />
            )}
          </div>
        </div>
      </Modal>
    );
  }
}

export default TaskModal;
