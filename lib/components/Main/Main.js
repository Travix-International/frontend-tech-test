import React from 'react';

import TaskList from '../Tasks/TaskList';
import AddTask from '../Tasks/AddTask';
import Filters from '../Tasks/Filters';

const Main = () => (
  <main>
    <Filters />
    <AddTask />
    <TaskList />
  </main>
);

export default Main;
