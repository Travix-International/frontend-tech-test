import React from 'react';

import styles from './Header.scss';

const Header = () => {
  return (
    <header className={styles.root}>
      <h1 className={styles.logo}>Taskstack</h1>
    </header>
  );
};

export default Header;
