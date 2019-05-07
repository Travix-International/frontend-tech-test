import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from 'reactstrap';
import classNames from 'classnames';
import styles from './TaskItem.module.scss';

class TaskItem extends React.PureComponent {

  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }),
    style: PropTypes.object,
    onToggleTask: PropTypes.func,
    onClickTask: PropTypes.func,
  }

  static defaultProps = {
    onToggleTask: () => {},
    onClickTask: () => {}
  }

  clickTask = e => {
    e.preventDefault();
    const { task, onClickTask } = this.props;
    onClickTask(task);
  }

  toggleTask = e => {
    e.preventDefault();
    const { task } = this.props;
    this.props.onToggleTask(task.id);
  }

  render () {
    const { task, style } = this.props;
    if (!task) return null;

    const itemClasses = classNames({
      [styles['task-item-title']]: true,
      [styles['completed']]: task.completed,
      'text-muted': task.completed
    });
    const itemId = `taskcheckbox_${task.id}`;

    return (
      <div
        style={style}
        className={styles['task-item']}
      >
        <CustomInput 
          type="checkbox" 
          id={itemId}
          name={itemId}
          checked={task.completed}
          onChange={this.toggleTask}
        />
        <div 
          className={itemClasses}
          onClick={this.clickTask}
        >
          {task.title}
        </div>
      </div>
    );
  }
}

export default TaskItem;