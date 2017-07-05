import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions';

class TasksList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderTasks() {
    const tasks = this.props.tasks;

    if (tasks.length > 0) {
      tasks.map(task => {
        console.log(task.title);
      });
    }
  }

  render() {
    return (
      <div>
        <h1>My Tasks</h1>

        <ul className="movies-list">
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
