import React, { Component } from "react";
import enhance from "./enhance";
import Form from "./Form";

class TaskItem extends Component {
  checkHandler = e => {
    this.changeHandler({ done: e.target.checked });
  };

  changeHandler = patch => {
    this.props.change({
      ...this.props.task,
      ...patch,
    });
  };
  render() {
    const { done, title, description } = this.props.task;

    return (
      <div>
        <input
          type="checkbox"
          name="done"
          checked={done}
          onChange={this.checkHandler}
        />

        <Form
          title={title}
          description={description}
          onSubmit={this.changeHandler}
        />
      </div>
    );
  }
}

export default enhance(TaskItem);
