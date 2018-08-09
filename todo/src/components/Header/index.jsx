import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import styles from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <header className={styles.header}>
        <Button icon="arrow_back" href="" mini />
        <Button label="New" icon="add" href="/new" primary raised/>
      </header>
    )
  }
}

export default withRouter(Header);