import "./styles.scss";
import React, { Component } from "react";
import { Circle, CheckCircle } from "react-feather";
import enhance from "./enhance";

// magic number
const ACCENT_COLORS_COUNT = 11;

class TaskItem extends Component {
  color = Math.round(Math.random() * ACCENT_COLORS_COUNT) + 1;

  checkHandler = e => {
    e.stopPropagation();

    const { task, change } = this.props;
    change({ ...task, done: !task.done });
  };

  render() {
    const { done, title } = this.props.task;

    return (
      <div className={`item item_color-${this.color} ${done && "item_done"}`}>
        <div className="item__icon" onClick={this.checkHandler}>
          {done ? <CheckCircle /> : <Circle />}
        </div>

        <div className="item__title">{title}</div>
      </div>
    );
  }
}

export default enhance(TaskItem);
