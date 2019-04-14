import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { bool, func } from "prop-types";

import { createTask, getTasks } from "../services/redux/tasks";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import styles from "./App.scss";

class App extends Component {
  static propTypes = {
    loading: bool,
    createTask: func,
  };

  state = {
    loading: false,
  };

  componentDidUpdate() {
    const { loading } = this.props;
    if (!loading && this.state.loading) {
      this.setState({ loading: false });
    }
  }

  createTask = values => {
    const { createTask } = this.props;
    createTask(values);
    this.setState({ loading: true });
  };

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
            headerName="Create task"
            onSubmitName="Create task"
            onSubmit={this.createTask}
            loading={loading}
          />
        </div>
        <TaskList />
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
