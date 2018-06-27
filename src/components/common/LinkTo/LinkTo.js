import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LinkTo extends Component {

  render() {
  	const { to, customClass, value } = this.props;
    return (
      <Link to={to} className={customClass} >{value}</Link>
    );
  }
}

export default LinkTo;