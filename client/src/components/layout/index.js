import React from 'react';
import LABELS from '../../constatns/labels';

const Layout = () => {
  return (
    <React.Fragment>
      <header>
        { LABELS.APP_TITLE }
      </header>
      <main>

      </main>
      <footer>
        Created by <a href="http://jayendra.co.in">Jayendra Sharan</a>
      </footer>
    </React.Fragment>
  )
};

export default Layout;
