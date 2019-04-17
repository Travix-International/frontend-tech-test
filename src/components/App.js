import { hot } from "react-hot-loader";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { bool, func, string, arrayOf, shape } from "prop-types";

import { createTask, getTasks } from "../services/redux/tasks";
import { errorMessages, maxLengths } from "../utilities/utilities";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import styles from "./App.scss";

export class App extends Component {
  static propTypes = {
    loading: bool.isRequired,
    createTask: func.isRequired,
    tasks: arrayOf(
      shape({ id: string.isRequired, title: string, description: string })
    ),
  };

  static defaultProps = {
    tasks: [],
  };

  state = {
    loading: false,
  };

  taskForm = createRef();

  static getDerivedStateFromProps(props, state) {
    const { loading } = props;
    const { loading: loadingState } = state;
    if (!loading && loadingState) {
      return { loading: false };
    }
    return null;
  }

  createTask = values => {
    this.props.createTask(values);
    this.setState({ loading: true });
  };

  validate = () => {
    if (this.props.tasks.length === maxLengths.tasks) {
      return errorMessages.maxTasksAmount;
    }
    return null;
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
            loading={loading}
            onSubmit={this.createTask}
            onSubmitName="Create task"
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
