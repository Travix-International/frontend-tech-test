import React, { Component } from "react";
import { connect } from "react-redux";
import { array, func } from "prop-types";

import {
  fetchTasks,
  getTasks,
  updateTask,
  deleteTask,
} from "../../services/redux/tasks";

import TaskModal from "../TaskModal";
import Task from "./Task";

import styles from "./TaskList.scss";

export class TaskList extends Component {
  static propTypes = {
    updateTask: func.isRequired,
    fetchTasks: func.isRequired,
    tasks: array.isRequired,
  };

  state = {
    showModal: false,
    task: null,
  };

  componentDidMount() {
    this.props.fetchTasks();
  }

  openEditModal = task => this.setState({ showModal: true, task: task });

  closeModal = () => this.setState({ showModal: false, task: null });

  editTask = values => {
    this.props.updateTask({ ...values, id: this.state.task.id });
    this.closeModal();
  };

  deleteTask = id => this.props.deleteTask({ id });

  render() {
    const { showModal, task } = this.state;
    const { tasks } = this.props;

    return (
      <div className={styles.TaskList}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            openEditModal={this.openEditModal}
            deleteTask={this.deleteTask}
          />
        ))}
        <TaskModal
          isOpen={showModal}
          onClose={this.closeModal}
          editTask={this.editTask}
          task={task}
        />
      </div>
    );
  }
}

const stateToProps = state => getTasks(state);
const dispatchToProps = { fetchTasks, updateTask, deleteTask };

export default connect(
  stateToProps,
  dispatchToProps
)(TaskList);
