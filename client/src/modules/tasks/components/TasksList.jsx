import React from 'react';
import PropTypes from 'prop-types';
import List from '../../common/List';
import TaskListItem from './TaskListItem';

export default class TasksList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.any).isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  getTaskListItem(task) {
    return <TaskListItem key={`TaskListItem-${task.id}`} task={task} />;
  }

  render() {
    const { tasks, className } = this.props;

    return (
      <List
        className={`TasksList ${className}`}
        renderListItem={task => this.getTaskListItem(task)}
        items={tasks}
      />
    );
  }
}
