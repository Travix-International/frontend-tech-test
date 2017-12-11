import React from 'react';
import Textarea from "react-textarea-autosize";


export const TaskActive = ({ task, onTaskToggle, onTaskDelete, onTaskUpdate }) => {
  const onToggle = () => onTaskToggle(task);
  const onDelete = () => onTaskDelete(task);
  const onUpdate = event => onTaskUpdate(event, task);
  const onUpdateTitle = event => onTaskUpdate(event, task, 'title');
  const onUpdateDescription = event => onTaskUpdate(event, task, 'description');
  const placeholder = 'Add a task description...';

  return (
    <li key={task.id} className={`task-list-item`}>
      <span className="on-task-done" onClick={onToggle}>O</span>
      <span className="on-task-delete" onClick={onDelete}>X</span>
      <form onSubmit={onUpdate}>
        <input type="text" value={task.title} onChange={onUpdateTitle} onBlur={onUpdateTitle} />
        <Textarea
          value={task.description}
          placeholder={placeholder}
          onChange={onUpdateDescription}
          onBlur={onUpdateDescription}
        />
      </form>
    </li>
  )
};

export default TaskActive;
