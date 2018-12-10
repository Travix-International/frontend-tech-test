/**
 * @fileoverview component contains the main layout of the application,
 * like header, footer, and, main app.
 */
import React from 'react';
import LABELS from '../../constants/labels';
import ConnectedList from '../list/ConnectedList';

const Layout = () => {
  return (
    <React.Fragment>
      <header>
        { LABELS.APP_TITLE }
      </header>
      <main>
        <ConnectedList />
      </main>
      <footer>
        Created by <a href="http://jayendra.co.in">Jayendra Sharan</a>
      </footer>
    </React.Fragment>
  )
};

export default Layout;
