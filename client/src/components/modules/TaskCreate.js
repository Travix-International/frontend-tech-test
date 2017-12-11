import React from 'react';

export const TaskCreate = ({ title, onTaskCreate }) => {
  const onCreate = (event) => onTaskCreate(event, title);
  const placeholder = 'Add new task...';

  return(
    <li key="0" className={`task-list-item`}>
      <form onSubmit={onCreate}>
        <input type="text" value={title} placeholder={placeholder}
          onChange={onCreate}
          onBlur={onCreate} />
      </form>
    </li>
  )
}

export default TaskCreate;
