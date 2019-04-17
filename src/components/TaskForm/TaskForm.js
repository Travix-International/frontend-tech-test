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
      title: string,
      description: string,
    }),
    headerName: string,
    onSubmitName: string.isRequired,
    onSubmit: func.isRequired,
    loading: bool,
    validate: func,
  };

  static defaultProps = {
    task: { title: "", description: "" },
    headerName: "",
    loading: false,
    validate: () => {},
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
        return null;
      }
    }

    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (cleanTitle === "" && cleanDescription === "") {
      this.setErrorMessage(errorMessages.emptyFields);
      return null;
    }

    return {
      title: cleanTitle,
      description: cleanDescription,
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
          <Notification onDismiss={this.hideNotification} type="error">
            {validationError}
          </Notification>
        ) : null}
        <form acceptCharset="utf-8" onSubmit={this.onSubmit}>
          <label className={styles.field}>
            <Counter maxLength={maxLengths.title} valueLength={title.length} />
            Title:
            <input
              className={styles.input}
              maxLength={maxLengths.title}
              name="title"
              onChange={this.onChange}
              type="text"
              value={title}
            />
          </label>
          <label className={styles.field}>
            <Counter
              maxLength={maxLengths.description}
              valueLength={description.length}
            />
            Description:
            <textarea
              className={styles.textarea}
              maxLength={maxLengths.description}
              name="description"
              onChange={this.onChange}
              rows="3"
              value={description}
            />
          </label>
          <Button loading={loading}>{onSubmitName}</Button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
