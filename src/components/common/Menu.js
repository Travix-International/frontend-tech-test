import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
const Menu = () => {
  return (
    <Nav bsStyle="pills">
      <IndexLinkContainer to="/">
        <NavItem>
          Home
        </NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/todo-edit">
        <NavItem className="addProductLink">
          Add Task <Glyphicon glyph="plus-sign"/>
        </NavItem>
      </LinkContainer>
    </Nav>
  );
};

export default Menu;
