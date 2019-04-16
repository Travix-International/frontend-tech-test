import React, { Component } from "react";
import { connect } from "react-redux";
import { array, func } from "prop-types";

import {
  fetchTasks,
  getTasks,
  updateTask,
  deleteTask,
} from "../../services/redux/tasks";
import { maxLengths } from "../../utilities/utilities";

import Counter from "../Counter";
import TaskModal from "../TaskModal";
import Task from "./Task";

import styles from "./TaskList.scss";

export class TaskList extends Component {
  static propTypes = {
    updateTask: func.isRequired,
    fetchTasks: func.isRequired,
    tasks: array.isRequired,
    clearError: func.isRequired,
    deleteTask: func.isRequired,
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
    const { task } = this.state;
    if (
      values.title === task.title &&
      values.description === task.description
    ) {
      this.closeModal();
      return;
    }
    this.props.updateTask({ ...values, id: task.id });
    this.closeModal();
  };

  render() {
    const { showModal, task } = this.state;
    const { tasks, deleteTask, clearError } = this.props;

    return (
      <div className={styles.TaskList}>
        <span className={styles.counterWrapper}>
          <Counter valueLength={tasks.length} maxLength={maxLengths.tasks} />
        </span>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            openEditModal={this.openEditModal}
            deleteTask={deleteTask}
            clearError={clearError}
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
