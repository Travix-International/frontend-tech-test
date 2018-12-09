import React from 'react';
import { LoadingOverlay } from 'travix-ui-kit';
import types from './../../constants/types';
import LABELS from '../../constants/labels';
import TaskItem from '../task-item';
import { Scrollbars } from 'react-custom-scrollbars';

const TaskList = ({
  tasks,
  isFetching,
  appErrorStatus,
  updateTask,
  isUpdating,
  id,
  updateErrorMessage
}) => {
  return (
    <LoadingOverlay
      loading={isFetching}
      message={ LABELS.TASKS.LOADING }
      messageDirectiion='bottom'
      spinner={ true }
      transparency={ isFetching && !!tasks.length }>
        <Scrollbars style={{ height: 400 }}>
          {
            (appErrorStatus > 0) ?
              <div className='no-task-in-bucket'>
                { LABELS.ERROR_MESSAGE[appErrorStatus] }
              </div>

              : // if no error, check for tasks length.

              tasks.length ?
                tasks.map (task => {
                  return (
                    <TaskItem
                      updateErrorMessage={ updateErrorMessage }
                      errorId={ id }
                      isUpdating={ isUpdating && task.id === id }
                      toggleStatus={ (id, task) => {
                        updateTask (id, task);
                      }}
                      task={ task }
                      key={task.id} />
                    )
                }) :
                <div className='no-task-in-bucket'>
                  { LABELS.TASKS.NO_TASKS }
                </div>
          }
        </Scrollbars>
      </LoadingOverlay>
  )
};

TaskList.prototype = {
  currentTab: types._number,
  isFetching: types._boolean,
  tasks: types._taskArray,
  appErrorStatus: types._number 
}

export default TaskList;
