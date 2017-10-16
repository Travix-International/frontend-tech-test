import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

import logo from '../style/travix-logo_blue.webp';
import '../style/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-whole">
          <header className="App-header">
            <h1 className="App-title">Welcome to Sample application</h1>
            <section className="App-desc">
              <span className="App-author">by <b>Katinka Orosz</b> for</span>
              <img src={logo} className="App-logo" alt="Travix" />
            </section>
          </header>
          <section className="App-body">
            <AddTask />
            <TaskList />
          </section>
        </div>
      </div>
    );
  }
}
