import React from "react";

import "./Description.scss";
import { Task } from "../../models/Task";

interface Props {
  change: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleEdit: () => void;
  edit: () => void;
  task: Task;
  status: boolean;
}

const Description: React.FC<Props> = ({
  task,
  change,
  edit,
  handleEdit,
  status
}) => {
  const info = task && (
    <div className="info">
      <div className="title">
        <h3>Title</h3>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={change}
          disabled={status ? false : true}
        />
      </div>
      <div className="category">
        <h3>Category</h3>
        <input
          type="text"
          name="category"
          value={task.category}
          onChange={change}
          disabled={status ? false : true}
        />
      </div>
      <div className="description">
        <h3>Description</h3>
        <textarea
          name="description"
          value={task.description}
          onChange={change}
          disabled={status ? false : true}
        />
      </div>
      <button onClick={!status ? handleEdit : edit}>
        {!status ? "Edit" : "Done!"}
      </button>
    </div>
  );

  return <>{info}</>;
};

export default Description;
