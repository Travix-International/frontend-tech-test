import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from './../ui/Button';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Button text="Main" href="" />
        <Button text="New" href="/new" />
      </header>
    )
  }
}

export default withRouter(Header);