import React, { Component } from "react";
import TaskItem from "components/Item";
import enhance from "./enhance";

class TasksList extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map(({ id }) => (
          <li key={id}>
            <TaskItem taskID={id} />
          </li>
        ))}
      </ul>
    );
  }
}

export default enhance(TasksList);
