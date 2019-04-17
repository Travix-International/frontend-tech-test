import React from "react";
import { shape, string, func } from "prop-types";

import Icon from "../Icon";
import styles from "./Task.scss";

const Task = props => {
  const onEdit = () => {
    const { task, openEditModal } = props;
    openEditModal(task);
  };

  const onDelete = () => {
    const { task, deleteTask, clearError } = props;
    clearError();
    deleteTask({ id: task.id });
  };

  const { task } = props;

  return (
    <div className={styles.taskContainer}>
      <section className={styles.task}>
        <h4 className={styles.title}>{task.title}</h4>
        <p className={styles.description}>{task.description}</p>
      </section>
      <div className={styles.actions}>
        <button className={styles.iconButton} onClick={onDelete} type="button">
          <Icon glyph="trash" />
        </button>
        <button className={styles.iconButton} onClick={onEdit} type="button">
          <Icon glyph="pencil" />
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: shape({
    id: string.isRequired,
    title: string,
    description: string,
  }).isRequired,
  openEditModal: func.isRequired,
  deleteTask: func.isRequired,
  clearError: func.isRequired,
};

export default Task;
