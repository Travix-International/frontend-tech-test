import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import TaskItemEditView from '../taskItem/TaskItemEditView';
import TasksList from '../tasksList/TasksList';
import { keepEditMode } from '../actions';
import './tasksContainer.scss';

const TasksContainer = (props) => {

  const [isTaskEditorVisible, setTaskEditorVisible] = useState(false);
  const { tasksList, totalTasks, isEditInProcess } = useSelector(state => (
    {
      tasksList: state.task.tasksList,
      totalTasks: state.task.totalTasks,
      isEditInProcess: state.task.isEditInProcess
    }
  ), shallowEqual);
  const tempId = tasksList.length === totalTasks ? tasksList.length + 999999 : -1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEditInProcess) {
      setTaskEditorVisible(isEditInProcess);
    }
  }, [isEditInProcess]);

  let stylesForBuffer = 'taskContainer__buffer ';

  const handleNewTaskAdd = () => {
    if (!isEditInProcess) {
      stylesForBuffer = stylesForBuffer + 'taskContainer__buffer--extended';
      setTaskEditorVisible(true);
      dispatch(keepEditMode(true));
    } else {
      stylesForBuffer = 'taskContainer__buffer ';
      setTaskEditorVisible(false);
    }
  };

  const taskEditor = (
    <div className="taskEditor">
      <TaskItemEditView isEditable={isTaskEditorVisible}
                        tempId={tempId}
                        title=""
                        description=""
                        setIsEditMode={setTaskEditorVisible}
      />
    </div>
  );

  return (
    <div className="taskContainer">
      <div className={stylesForBuffer}>
        <button className="taskContainer__addTaskBtn"
                onClick={handleNewTaskAdd}>Add New Task</button>
        {isTaskEditorVisible && taskEditor}
      </div>
      <TasksList />
    </div>
  );
};

export default TasksContainer;