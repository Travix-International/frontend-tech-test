import React from 'react';
import Textarea from "react-textarea-autosize";

export const TaskCompleted = ({ task, onTaskToggle, onTaskDelete }) => {
  const onToggle = () => onTaskToggle(task);
  const onDelete = () => onTaskDelete(task);
  const placeholder = 'Add a task description...';

  return (
    <li key={task.id} className={`task-list-item is-done`}>
      <span className="on-task-done" onClick={onToggle}>O</span>
      <span className="on-task-delete" onClick={onDelete}>X</span>
      <form>
        <input type="text" value={task.title} disabled="disabled"/>
        <Textarea
          value={task.description}
          placeholder={placeholder}
          disabled="disabled"
        />
      </form>
    </li>
  );
};

export default TaskCompleted;
