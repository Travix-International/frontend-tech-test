import React, { useState, useEffect, useRef } from 'react';
import TaskItemEditView from './TaskItemEditView';
import TaskItemView from './TaskItemView';

import './taskItem.scss';

const TaskItem = (props) => {

  const { title, description, isEditable, id, tempId } = props;
  const [isEditMode, setIsEditMode] = useState(isEditable);
  const taskTitleInput = useRef(null);

  useEffect(() => {
    if (isEditMode && tempId) {
      taskTitleInput.current.focus();
    }
  }, [isEditable, isEditMode, tempId]);

  const taskItem = isEditMode
        ? (
            <TaskItemEditView { ...props }
                              isEditable={true}
                              setIsEditMode={setIsEditMode}
            />
          )
        : (
            <TaskItemView id={id}
                          temp={tempId}
                          title={title}
                          description={description}
                          setIsEditMode={setIsEditMode}
            />
          );

  return (
    <div className="taskItem">
      {taskItem}
    </div>
  );
}
const MemoTaskItem = React.memo(TaskItem, (prevProps, nextProps) => {
  let taskChanged = false
  if (prevProps.id === nextProps.id || prevProps.tempId === nextProps.tempId
      || prevProps.isEditable === nextProps.isEditable
      || prevProps.title === nextProps.title
      || prevProps.description === nextProps.description) {
    taskChanged = true;
  }

  return taskChanged;
});

export default MemoTaskItem;