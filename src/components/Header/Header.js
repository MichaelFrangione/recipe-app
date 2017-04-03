import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <ul className="header__nav">
                    <li className="header__nav__list-item">
                        <Link to="login">Login</Link>
                    </li>
                    <li className="header__nav__list-item">Register</li>
                </ul>
            </header>
        )
    }
};