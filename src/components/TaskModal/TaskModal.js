import React from "react";
import { Modal } from "react-overlays";
import { bool, func, string, shape } from "prop-types";

import Icon from "../Icon";
import TaskForm from "../TaskForm";

import styles from "./TaskModal.scss";

const TaskModal = props => {
  const { isOpen, onClose, task, editTask } = props;

  return (
    <Modal
      className={styles.TaskModal}
      backdropClassName={styles.backdrop}
      show={isOpen}
      onHide={onClose}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Edit task</h2>
          <span className={styles.closeButton}>
            <Icon glyph="x" onClick={onClose} />
          </span>
        </div>
        <div className={styles.body}>
          <TaskForm task={task} onSubmit={editTask} onSubmitName="Edit task" />
        </div>
      </div>
    </Modal>
  );
};

TaskModal.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  editTask: func.isRequired,
  task: shape({
    id: string.isRequired,
    title: string,
    description: string,
  }),
};

export default TaskModal;
