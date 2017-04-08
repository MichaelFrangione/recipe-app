import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';


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

          <div className="container home">
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <Jumbotron className="home__jumbotron">
                  <h2>Welcome to Recipe App!</h2>
                  <p>This app will hopefully do something some day so for now I'm just filling up space It also probably won't show when you are logged in...</p>
                  <p>Login or Register to Get Started!</p>
                  <p><Button bsStyle="primary">Take me there</Button></p>
                </Jumbotron>
              </Col>
              <Col xs={12} md={4}>
                <h2>Random Recipes</h2>
                <ListGroup>
                  <ListGroupItem href="#link1">Hiyashi Beef</ListGroupItem>
                  <ListGroupItem href="#link2">Pesto Pasta</ListGroupItem>
                  <ListGroupItem href="#link2">Okonomiyaki</ListGroupItem >
                </ListGroup>
              </Col>
              </Row>
          </div>
        </div>
    );
  }
}

export default App;
