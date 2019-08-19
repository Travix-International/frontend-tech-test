import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { removeTask, keepEditMode } from '../actions';

const TaskItemEditView = (props) => {

  const { id, tempId, title, description, setIsEditMode } = props;
  const dispatch = useDispatch();
  const isAnotherTaskInEdit = useSelector(state => state.task.isEditInProcess, shallowEqual);

  const handleTaskDone = () => {
    dispatch(removeTask(id || tempId));
  }

  const handleTaskEdit = () => {
    if (!isAnotherTaskInEdit) {
      setIsEditMode(true);
      dispatch(keepEditMode(true));
    }
  }

  return (
    <>
      <div className="taskItemView">
        <p className="taskItem__title">{title}</p>
        <p className="taskItem__description">{description}</p>
      </div>
      <div className="taskItemControls">
        <button className="taskItemControls__button taskItemControls__button--edit"
                onClick={handleTaskEdit}>Edit</button>
        <button className="taskItemControls__button taskItemControls__button--done"
                onClick={handleTaskDone}>Done!</button>
      </div> 
    </>
  );
};

export default TaskItemEditView;