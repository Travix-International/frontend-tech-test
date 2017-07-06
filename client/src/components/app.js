import React, { Component } from 'react';

import TasksList from './tasks_list';
import TasksNew from './tasks_new';

class App extends Component {
  render() {
    return (
			<div>
        <h1 className="app-title">My Tasks</h1>
        <TasksNew />
        <TasksList />
			</div>
    );
  }
}

export default App;
