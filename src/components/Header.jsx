import * as React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header column-12">
        <div className="wrapper">
          <div className="column-4"><h1>Travix</h1></div>
          <div className="column-8"></div>
        </div>
      </div>
    )
  }
}