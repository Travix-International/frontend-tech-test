import React from 'react';
import LABELS from '../../constants/labels';
import List from '../list';
import TaskInput from '../task-input';

const Layout = () => {
  return (
    <React.Fragment>
      <header>
        { LABELS.APP_TITLE }
      </header>
      <main>
        <TaskInput />
        <List />
      </main>
      <footer>
        Created by <a href="http://jayendra.co.in">Jayendra Sharan</a>
      </footer>
    </React.Fragment>
  )
};

export default Layout;
