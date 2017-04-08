import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import logo from '../../images/logo.png';

export default class Header extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <header className="header">
                <Navbar inverse collapseOnSelect className="header__nav">
                    <Navbar.Header>
                    <Navbar.Brand className="header__nav__brand">
                        <img src={logo} className="App-logo pull-left" alt="logo" />
                        <a href="#" className="pull-left">Recipe App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Featured Recipes</NavItem>
                        <NavItem eventKey={2} href="#">Random Recipe</NavItem>
                    </Nav>

                        
                    { this.props.isLoggedIn ? (
                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="Username" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Account</MenuItem>
                                <MenuItem eventKey={3.2}>My Recipes</MenuItem>
                                <MenuItem eventKey={3.3}>Settings</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.4}>Logout</MenuItem>
                            </NavDropdown>
                        </Nav>) : ( 

                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Login</NavItem>
                            <NavItem eventKey={2} href="#">Register</NavItem>
                        </Nav>)
                    }
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
};

Header.defaultProps = {
    isLoggedIn: false
}