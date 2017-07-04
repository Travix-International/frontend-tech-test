import React from 'react';
import Task from './../task/container';
import './style.scss';

const Main = () => (
  <div className="main">
    <header>
      <h1>Frontend-tech-test</h1>
    </header>
    <div className="content">
      <Task />
    </div>
    <footer>
      <h3>Footer</h3>
    </footer>
  </div>
);

export default Main;
