import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions';

import TasksListItem from './tasks_list_item';

class TasksList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderTasks() {
    let tasks = this.props.tasks;

    if (tasks.length > 0) {
      tasks = tasks.sort((a, b) => b.id - a.id);

      return tasks.map(task => {
        return <TasksListItem key={task.id} task={task} />
      });
    } else {
      return <div className="no-tasks">You don't have any tasks yet</div>;
    }
  }

  render() {
    return (
      <div className="grid">
        <ul className="taskslist">
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { fetchTasks })(TasksList);
