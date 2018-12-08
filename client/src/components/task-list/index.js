import React from 'react';
import { LoadingOverlay } from 'travix-ui-kit';
import types from './../../constants/types';
import LABELS from '../../constants/labels';
import TaskItem from '../task-item';
import { Scrollbars } from 'react-custom-scrollbars';

const TaskList = ({
  tasks,
  isFetching
}) => {
  return (
    <LoadingOverlay
      loading={isFetching}
      message={ LABELS.TASKS.LOADING }
      messageDirectiion='bottom'
      spinner={ true }
      transparency={ false }>
        <Scrollbars style={{ height: 400 }}>
          {
            tasks.length ?
            tasks.map (task => {
              return (
                <TaskItem
                  updateTask={ (e) => {e.preventDefault ()} }
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
  tasks: types._taskArray
}

export default TaskList;
