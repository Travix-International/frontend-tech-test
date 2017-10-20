import React, { Component } from 'react';
import { Nav, NavItem,  Navbar, FormGroup, Button, FormControl } from 'react-bootstrap';
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
                <Navbar.Form pullRight>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>
                    {' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
                </Navbar.Collapse>
        </Navbar>
        );
    }
}
export default Header;