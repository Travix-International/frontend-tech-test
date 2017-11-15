import React, { Component } from 'react';
import { Nav, NavItem,  Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Travix</a>
                    </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                 <Nav>
                    <LinkContainer to="/">
                        <NavItem>Home</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <NavItem>About</NavItem>
                    </LinkContainer>
                </Nav> 
                </Navbar.Collapse>
        </Navbar>
        );
    }
}
export default Header;