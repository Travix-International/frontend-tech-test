import React, { Component } from "react";
import { bool } from "prop-types";

import Button from "../Button";

import styles from "./Form.scss";

class Form extends Component {
  static propTypes = {
    hideSubmit: bool,
  };

  state = {
    title: "",
    description: "",
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("create task");
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { hideSubmit } = this.props;
    return (
      <form acceptCharset="utf-8" onSubmit={this.onSubmit}>
        <label className={styles.field}>
          Title:
          <input
            type="text"
            name="title"
            className={styles.input}
            onChange={this.onChange}
          />
        </label>
        <label className={styles.field}>
          Description:
          <textarea
            name="description"
            className={styles.textarea}
            onChange={this.onChange}
          />
        </label>
        {hideSubmit ? null : <Button>Create task</Button>}
      </form>
    );
  }
}

export default Form;
