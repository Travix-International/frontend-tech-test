import React from "react";

import "./TaskItem.scss";
import { Task } from "../../models/Task";

interface ITaskItem {
  title: string;
  completed: boolean | undefined;
  category: string | undefined;
  changeStatus: () => void;
  deleteTask: () => void;
  handleTask: () => void;
}

const TaskItem: React.FC<ITaskItem> = ({
  title,
  completed,
  category,
  changeStatus,
  deleteTask,
  handleTask
}) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        onClick={changeStatus}
        defaultChecked={completed}
      />
      <div onClick={handleTask}>
        <p className={completed ? "negative" : ""}>{title}</p>
        <span>{category}</span>
      </div>
      <div className="del" onClick={deleteTask}></div>
    </div>
  );
};

export default TaskItem;
