import React, { Component } from 'react';
import './App.css';

import TaskTitle from './components/atoms/TaskTitle/index'
import TaskDescription from './components/atoms/TaskDescription/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskTitle>Title</TaskTitle>
        <TaskDescription>Title</TaskDescription>
      </div>
    );
  }
}

export default App;
