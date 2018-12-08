import React from 'react';
import LABELS from '../../constants/labels';
import TaskInput from '../task-input';
import ConnectedList from '../list/ConnectedList';

const Layout = () => {
  return (
    <React.Fragment>
      <header>
        { LABELS.APP_TITLE }
      </header>
      <main>
        <TaskInput />
        <ConnectedList />
      </main>
      <footer>
        Created by <a href="http://jayendra.co.in">Jayendra Sharan</a>
      </footer>
    </React.Fragment>
  )
};

export default Layout;
