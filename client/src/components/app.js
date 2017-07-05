import React, { Component } from 'react';

import TasksList from './tasks_list';

class App extends Component {
  render() {
    return (
			<div>
        <h1>My Tasks</h1>
        <TasksList />
			</div>
    );
  }
}

export default App;
