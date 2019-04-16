import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";

import { errorMessages, maxLengths } from "../../utilities/utilities";
import Button from "../Button";
import Counter from "../Counter";
import Notification from "../Notification";

import styles from "./TaskForm.scss";

class TaskForm extends Component {
  static propTypes = {
    task: shape({
      id: string.isRequired,
      title: string,
      description: string,
    }),
    headerName: string,
    onSubmitName: string.isRequired,
    onSubmit: func.isRequired,
    loading: bool,
    validate: func,
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

  setErrorMessage = message => this.setState({ validationError: message });

  validate = ({ title, description }) => {
    const { validate } = this.props;

    if (validate) {
      const errorMessage = validate();
      if (errorMessage) {
        this.setErrorMessage(errorMessage);
        return;
      }
    }

    if (title === "" && description === "") {
      this.setErrorMessage(errorMessages.emptyFields);
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
            <Counter valueLength={title.length} maxLength={maxLengths.title} />
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
            <Counter
              valueLength={description.length}
              maxLength={maxLengths.description}
            />
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
