import React, { Component } from "react";
import { shape, string, number, bool, func } from "prop-types";

import Button from "../Button";
import Notification from "../Notification";

import styles from "./TaskForm.scss";

const maxLengths = {
  title: 40,
  description: 300,
};

class TaskForm extends Component {
  static propTypes = {
    task: shape({
      id: number.isRequired,
      title: string,
      description: string,
    }),
    headerName: string,
    onSubmitName: string.isRequired,
    onSubmit: func.isRequired,
    loading: bool,
  };

  state = {
    title: "",
    description: "",
    validationError: "",
  };

  componentDidMount() {
    const { task } = this.props;
    if (task) {
      this.setState({ title: task.title, description: task.description });
    }
  }

  validate = ({ title, description }) => {
    if (title === "" && description === "") {
      this.setState({
        validationError: "Please complete at least one of the fields",
      });
      return;
    }
    return {
      title: title.trim(),
      description: description.trim(),
    };
  };

  onSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { title, description } = this.state;
    const validValues = this.validate({ title, description });

    if (validValues) {
      onSubmit(validValues);
      this.clearState();
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  clearState = () =>
    this.setState({
      title: "",
      description: "",
      validationError: "",
    });

  hideNotification = () => {
    this.setState({
      validationError: "",
    });
  };

  render() {
    const { loading, headerName, onSubmitName } = this.props;
    const { title, description, validationError } = this.state;

    return (
      <div className={styles.TaskForm}>
        {headerName ? (
          <div className={styles.header}>
            <h2 className={styles.name}>{headerName}</h2>
          </div>
        ) : null}

        {validationError ? (
          <Notification type="error" onDismiss={this.hideNotification}>
            {validationError}
          </Notification>
        ) : null}
        <form acceptCharset="utf-8" onSubmit={this.onSubmit}>
          <label className={styles.field}>
            <span
              className={
                title.length >= maxLengths.title
                  ? styles.counterWarning
                  : styles.counter
              }
            >
              {title.length}/{maxLengths.title}
            </span>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              className={styles.input}
              onChange={this.onChange}
              maxLength={maxLengths.title}
            />
          </label>
          <label className={styles.field}>
            <span
              className={
                description.length >= maxLengths.description
                  ? styles.counterWarning
                  : styles.counter
              }
            >
              {description.length}/{maxLengths.description}
            </span>
            Description:
            <textarea
              name="description"
              value={description}
              className={styles.textarea}
              onChange={this.onChange}
              maxLength={maxLengths.description}
              rows="3"
            />
          </label>
          <Button loading={loading}>{onSubmitName}</Button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
