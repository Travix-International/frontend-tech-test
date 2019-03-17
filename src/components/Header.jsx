import React from "react";

const Header = props => (
  <nav className="navbar-dark bg-primary header-style">
    <h4>{props.headerTitle}</h4>
  </nav>
);

export default Header;
