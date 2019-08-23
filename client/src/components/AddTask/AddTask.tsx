import React, { useState } from "react";

import { Task } from "../../models/Task";
import "./AddTask.scss";

interface Props {
  change: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  add: () => void;
  task: Task;
}

const AddTask: React.FC<Props> = ({ change, add, task }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="add-task">
      <div onClick={() => setExpand(!expand)} className="task-button">
        <div className="icon-plus"></div>
        <h3>Add new task</h3>
      </div>
      {expand && (
        <div className="form-group">
          <hr />
          <form className="form-control">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={change}
              value={task.title}
              required
            />
          </form>

          <div className="form-control">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              id="category"
              onChange={change}
              value={task.category}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              onChange={change}
              value={task.description}
              required
            />
          </div>

          <button type="submit" onClick={add}>
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
