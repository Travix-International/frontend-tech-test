import React from 'react';

import TaskList from '../Tasks/TaskList';
import AddTaskModal from '../AddTask/AddTaskModal';
import AddTaskButton from '../AddTask/AddTaskButton';

const Main = () => (
  <main>
    <AddTaskButton />
    <TaskList />
    <AddTaskModal />
  </main>
);

export default Main;
