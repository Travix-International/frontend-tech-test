import React from 'react';

import '../scss/base.global.scss';
import styles from './App.scss';

import Header from './Header/Header';
import Main from './Main/Main';

const App = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
