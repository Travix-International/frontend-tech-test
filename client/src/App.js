import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {tasks: []}

  componentDidMount() {
    fetch('/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks : tasks.tasks }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.tasks.map(task =>
          <div key={task.id}>{task.title}</div>
        )}
      </div>
    );
  }
}

export default App;
