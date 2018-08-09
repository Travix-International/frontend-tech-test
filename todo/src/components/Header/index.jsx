import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('header', this.state)
    const isMain = this.props.location.pathname === "/";
    return (
      <header className={styles.header}>
        <Link className={isMain ? styles.invisible : styles.visible} to="/">
          <Button icon="arrow_back" mini />
        </Link>
        <Link to="/new">
          <Button label="New" icon="add" primary raised/>
        </Link>
      </header>
    )
  }
}

export default withRouter(Header);