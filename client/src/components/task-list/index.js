import React from 'react';
import { LoadingOverlay } from 'travix-ui-kit';
import types from './../../constants/types';
import LABELS from '../../constants/labels';

const TaskList = ({
  isFetching
}) => {
  return (
    <LoadingOverlay
      loading={isFetching}
      message={ LABELS.TASKS.LOADING }
      messageDirectiion='bottom'
      spinner={ true }
      transparency={ false }>
        <div>tasklist</div>
      </LoadingOverlay>
  )
};

TaskList.prototype = {
  currentTab: types._number,
  isFetching: types._boolean
}

export default TaskList;
