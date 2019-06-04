import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';

import TaskItem from '../TaskItem/TaskItem';

const TasksList = ({ tasks, height }) => (
  <FixedSizeList
    height={height}
    id="tasks-list"
    itemCount={tasks.length}
    itemSize={72}
  >
    {({ index, style }) => <TaskItem style={style} task={tasks[index]} />}
  </FixedSizeList>
);

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
};

export default TasksList;
