import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import logo from './logo.svg';
import './main.css';

class App extends Component {
  
  render() {
    return (
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={Header}/>
              <Route path="/login" component={Login}/>
            </div>
          </Router>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Recipe App</h2>
          </div>
          <p className="App-intro">
            Login to Get Started!
          </p>
        </div>
    );
  }
}

export default App;
