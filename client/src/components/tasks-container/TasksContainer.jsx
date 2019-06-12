import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { loadTasks } from '../../redux/modules/tasks';
import TaskButton from '../task-button/TaskButton';
import TaskList from '../task-list/TaskList';
import TaskDialog from '../task-dialog/TaskDialog';

let TasksContainer = ({ dispatch }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  useEffect(() => {
    dispatch(loadTasks());
  });

  return (
    <Fragment>
      {open && <TaskDialog open={open} setOpen={setOpen} />}
      <TaskButton color="secondary" handleClick={handleClick} title="Add Task" variant="contained" />
      <TaskList />
    </Fragment>
  );
};

TasksContainer = connect()(TasksContainer);

export default TasksContainer;
