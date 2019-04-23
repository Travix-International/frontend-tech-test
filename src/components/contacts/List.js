import React, { Component } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { getTasks } from "../../actions/todoActions";

class List extends Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    const { tasks } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-3">
          <span className="text-danger">TODO</span> List
        </h1>
        {tasks.map((task,index) => (
          <Task key={index} task={task} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.list.tasks
});

export default connect(
  mapStateToProps,
  { getTasks }
)(List);
