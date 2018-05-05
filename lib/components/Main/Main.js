import React from 'react';

import TaskList from '../Tasks/TaskList';
import TaskModal from '../AddTask/TaskModal';
import AddTaskButton from '../AddTask/AddTaskButton';

const Main = () => (
  <main>
    <AddTaskButton />
    <TaskList />
    <TaskModal />
  </main>
);

export default Main;
