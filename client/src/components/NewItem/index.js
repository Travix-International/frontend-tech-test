import React, { Component } from "react";
import enhance from "./enhance";
import Form from "./Form";

class TaskItem extends Component {
  createHandler = patch => {
    this.props.create({
      ...patch,
    });
  };

  render() {
    return (
      <div>
        +
        <Form onSubmit={this.createHandler} />
      </div>
    );
  }
}

export default enhance(TaskItem);
