import React, { useState, useEffect, useRef } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import useTaskInput from '../../../../customHooks/useTaskInput';
import { saveTask, keepEditMode, editExistingTask } from '../actions';

const TaskItemEditView = (props) => {

  const { title, description, isEditable, id, tempId, setIsEditMode } = props;

  const [isSaved, setIsSaved] = useState(false);
  const [task, handleTaskInputChange, clearInputs] = useTaskInput(props);
  const dispatch = useDispatch();
  const taskTitleInput = useRef(null);
  const isAnotherTaskInEdit = useSelector(state => state.task.isEditInProcess, shallowEqual);

  useEffect(() => {
    if (isEditable) {
      taskTitleInput.current.focus();
    }
  }, [isEditable]);

  const validateInputs = (bothInputs) => {
    const { title: changedTitle, description: changedDescription } = task;
    const titleValue = changedTitle.trim().length;
    const descriptionValue = changedDescription.trim().length;
    const taskWasChanged = (changedTitle !== title) || (changedDescription !== description);

    return bothInputs
           ? (titleValue && descriptionValue)
           : (titleValue || descriptionValue) && taskWasChanged;
  };

  const handleTaskInputLeaving = (e) => {
    if (!validateInputs(false) && !id) {
      dispatch(keepEditMode(false));
    }
  };

  const handleTaskSave = () => {
    if (task.id && !task.tempId) {
      if ( validateInputs(false)) {
        dispatch(editExistingTask(task));
        setIsSaved(true);
        setIsEditMode(false);
      }
    } else if (validateInputs(true)) {
      const showCreatedTask = tempId !== -1 ? true : false;

      dispatch(saveTask(task, showCreatedTask));
      setIsSaved(true);
      setIsEditMode(false);
    }
  }

  const handleTaskDelete = () => {
    if (isEditable && !isSaved) {
      dispatch(keepEditMode(false));
    }
    if (!isAnotherTaskInEdit || isEditable) {
      setIsEditMode(false);
      dispatch(keepEditMode(false));
      if (!isSaved) {
        clearInputs();
      }
    }
  };


  return (
    <>
      <div className="taskItemView taskItemView--edit">
        <input className="taskItem__title taskItem__title--edit"
                name="title"
                onChange={handleTaskInputChange}
                onBlur={handleTaskInputLeaving}
                value={task.title}
                ref={taskTitleInput}
                placeholder="Title"
        />
        <textarea className="taskItem__description taskItem__description--edit"
                  name="description"
                  onChange={handleTaskInputChange}
                  onBlur={handleTaskInputLeaving}
                  value={task.description}
                  placeholder="Description"
        />
      </div>
      <div className="taskItemControls">
        <button className="taskItemControls__button taskItemControls__button--save"
                onClick={handleTaskSave}>Save</button>
        <button className="taskItemControls__button taskItemControls__button--cancel"
                onClick={handleTaskDelete}>Cancel</button>
      </div>
    </>
  );
};

export default TaskItemEditView;