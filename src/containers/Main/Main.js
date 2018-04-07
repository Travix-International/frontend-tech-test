import React from 'react';

import ToolBox from '../ToolBox';
import TaskList from '../TaskList';

import './Main.scss';

const Main = () => (
  <div className="Main">
    <h1>Best To-Do App</h1>
    <ToolBox />
    <TaskList />
  </div>
);

export default Main;
