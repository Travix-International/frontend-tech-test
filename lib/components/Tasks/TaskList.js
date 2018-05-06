import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import styles from './TaskList.scss';
import Task from './Task';
import * as taskActions from '../../actions/taskActions';
import { sortTasks, getVisibleTasks } from './utils';

export class TaskList extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    showCompleted: PropTypes.bool.isRequired,
    tasks: PropTypes.array.isRequired
  };

  toggleTask = (_id, isComplete) => {
    this.props.actions.updateTask(_id, {
      isComplete
    });
  };

  removeTask = (_id) => {
    this.props.actions.removeTask(_id);
  };

  editTask = (_id) => {
    this.props.actions.toggleEditModal(_id);
  };

  render() {
    const { tasks, showCompleted } = this.props;
    /* always show incomplete tasks first */
    const visibleTasks = sortTasks(
      showCompleted ? tasks : getVisibleTasks(tasks)
    );
    if (visibleTasks.length === 0) {
      const content = <p className={styles.message}>Nothing to do</p>;
      return <div className={styles.root}>{content}</div>;
    }

    /* eslint-disable no-underscore-dangle */
    return (
      <div className={styles.root}>
        <ul className={styles.list}>
          {visibleTasks.map(task => (
            <Task
              key={task._id} 
              {...task}
              onEdit={this.editTask}
              onRemove={this.removeTask}
              onToggle={this.toggleTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
