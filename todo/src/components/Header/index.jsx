import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = props => {
  const isMain = props.location.pathname === "/";
  const isNew = props.location.pathname === "/new";
  return (
    <header className={styles.header}>
      <Link className={isMain ? styles.invisible : styles.visible} to="/">
        <Button icon="arrow_back" mini />
      </Link>
      <Link className={isNew ? styles.invisible : styles.visible} to="/new">
        <Button label="New" icon="add" primary raised/>
      </Link>
    </header>
  )
}

export default withRouter(Header);