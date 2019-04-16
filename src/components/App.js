import React, { Component, createRef } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { bool, func } from "prop-types";

import { createTask, getTasks } from "../services/redux/tasks";
import { errorMessages, maxLengths } from "../utilities/utilities";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import styles from "./App.scss";

export class App extends Component {
  static propTypes = {
    loading: bool,
    createTask: func,
  };

  state = {
    loading: false,
  };

  taskForm = createRef();

  componentDidUpdate() {
    if (!this.props.loading && this.state.loading) {
      this.setState({ loading: false });
    }
  }

  createTask = values => {
    this.props.createTask(values);
    this.setState({ loading: true });
  };

  validate = () => {
    if (this.props.tasks.length === maxLengths.tasks) {
      return errorMessages.maxTasksAmount;
    }
  };

  clearError = () => this.taskForm.current.hideNotification();

  render() {
    const { loading } = this.state;

    return (
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Todo tasks</h1>
        </header>
        <div className={styles.underline} />
        <div className={styles.formContainer}>
          <TaskForm
            ref={this.taskForm}
            headerName="Create task"
            onSubmitName="Create task"
            onSubmit={this.createTask}
            loading={loading}
            validate={this.validate}
          />
        </div>
        <TaskList clearError={this.clearError} />
      </main>
    );
  }
}

const stateToProps = state => getTasks(state);
const dispatchToProps = { createTask };

export default hot(module)(
  connect(
    stateToProps,
    dispatchToProps
  )(App)
);
