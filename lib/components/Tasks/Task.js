import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Task.scss';

class Task extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  toggleTask = () => {
    const { onToggle, _id, isComplete } = this.props;
    onToggle(_id, !isComplete);
  };

  removeTask = () => {
    const { onRemove, _id } = this.props;
    onRemove(_id);
  };

  editTask = () => {
    const { onEdit, _id } = this.props;
    onEdit(_id);
  };

  render() {
    const { title, description, isComplete, _id } = this.props;
    const taskStyles = `${styles.root} ${isComplete ? styles.complete : ''}`;
    const checkboxStyles = `${styles.checkbox} ${
      isComplete ? styles.checked : ''
    }`;
    return (
      <li className={taskStyles}>
        <div className={checkboxStyles}>
          <label htmlFor={`todo-${_id}`}>{title}</label>
          <input
            checked={isComplete}
            id={`todo-${_id}`}
            name="checkbox"
            onChange={this.toggleTask}
            type="checkbox"
          />
        </div>
        {description.length !== 0 && (
          <p className={styles.description}>{description}</p>
        )}
        <div className={styles.options}>
          <button className={styles.edit} onClick={this.editTask}>
            Edit
          </button>
          <button className={styles.delete} onClick={this.removeTask}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}

export default Task;
