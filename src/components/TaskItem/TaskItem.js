import React from 'react';
import PropTypes from 'prop-types';
import { 
  Input,
  ListGroupItem
} from 'reactstrap';
import classNames from 'classnames';
import styles from './TaskItem.module.scss';

class TaskItem extends React.PureComponent {

  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired,
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
    this.props.onToggleTask(this.props.task.id);
  }

  render () {
    const { task, style } = this.props;
    const itemClasses = classNames({
      [styles['task-title-item']]: true,
      [styles['completed']]: task.completed
    });

    return (
      <ListGroupItem>
        <Input 
          type="checkbox" 
          checked={task.completed}
          onChange={this.toggleTask}
        />
        <div 
          className={itemClasses}
          onClick={this.clickTask}
        >
          {task.title}
        </div>
      </ListGroupItem>
    );
  }
}

export default TaskItem;