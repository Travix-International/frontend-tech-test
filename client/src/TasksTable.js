import React, { Component } from "react";
import "./TasksTable.css";

class TaskRow extends Component {
  constructor(props) {
    super(props);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
  }

  handleClickUpdate(e) {
    e.preventDefault();
    this.props.onClickUpdate(this.props.task.id);
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            value={this.props.task.id}
            onChange={this.props.onToggleCheckBox}
            checked={this.props.checked}
          />
        </td>
        <td>{this.props.task.id}</td>
        <td className="ColumnTitle">{this.props.task.title}</td>
        <td className="ColumnDescription">{this.props.task.description}</td>
        <td><a href="" onClick={this.handleClickUpdate}>update</a></td>
      </tr>
    );
  }
}

class TasksTable extends Component {
  render() {
    var rows = [];

    this.props.tasks.forEach((task) => {
      rows.push(
        <TaskRow
          task={task}
          key={task.id}
          checked={!!this.props.checked[task.id]}
          onClickUpdate={this.props.onClickUpdate}
          onToggleCheckBox={this.props.onToggleCheckBox}
        />
      );
    });

    return (
      <div>
        <table className="TasksTable">
          <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={this.props.onMainCheckBoxUpdate}
                checked={this.props.mainCheckBox}
              />
            </th>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Update</th>
          </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default TasksTable;