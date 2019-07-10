import React from "react";
import enhance from "./enhance";
const TaskItem = ({ task }) => {
  const { title, description } = task;

  return (
    <div>
      <h3>{title}</h3>
      <small>{description}</small>
    </div>
  );
};

export default enhance(TaskItem);
