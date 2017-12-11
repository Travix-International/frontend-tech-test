import React, { Component } from 'react';
import Header from 'components/structure/Header'

export class Main extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header />
          {this.props.children}
      </div>
    );
  }
}

export default Main
