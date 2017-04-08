import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { Jumbotron, Button, Grid, Row, Col, Table, Thumbnail, Glyphicon } from 'react-bootstrap';

import samplePublicRecipes from "./sample_json.js";

import './main.css';

class App extends Component {

  getPublicRecipes() {
    let recipes = samplePublicRecipes.recipes;
     
     return (
        recipes.map((recipe, i) => {
            
            if (i > 2) return;

            return ( 
                    <tr key={recipe.id}>
                      <td><img src={recipe.images['thumbnail']} height="50" width="50"/></td>
                      <td>{recipe.name}</td>
                      <td>{recipe.author}</td>
                    </tr>
            )
        })
     )
  }

   getFeaturedPublicRecipes() {
    let recipes = samplePublicRecipes.recipes;
     
     return (
        recipes.map((recipe) => {
            return (
                    <Col xs={6} md={3} key={recipe.id}>
                      <Thumbnail src={recipe.images['thumbnail']} alt="242x200">
                        <h3>{recipe.name}</h3>
                        <p>Tags: {recipe.tags.map((tag, i) => { 
                            return <span key={i}><a href="#">{tag}</a>&nbsp;</span>
                            }) }
                        </p>
                        <p>
                          <Button bsStyle="primary">See Recipe</Button>
                        </p>
                      </Thumbnail>
                    </Col>
            )
        })
     )
  }

  render() {
    return (
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={Header}/>
              <Route path="/login" component={Login}/>
            </div>
          </Router>

          <div className="landing">
            <div className="container home">
              <Grid>
                <Row className="">
                  <Col xs={12} md={7}>
                    <Jumbotron className="home__jumbotron">
                      <h2>Welcome to Recipe App!</h2>
                      <p>This app will hopefully do something some day so for now I'm just filling up space It also probably won't show when you are logged in...</p>
                      <p>Login or Register to Get Started!</p>
                      <p><Button bsStyle="primary">Take me there</Button></p>
                    </Jumbotron>
                  </Col>

                  <Col xs={12} md={5}>
                  <Jumbotron className="home__jumbotron">
                    <h2>Random Recipes</h2>
                    <Table hover={true}>
                        <thead>
                          <tr>
                            <th></th>
                            <th></th>
                            <th>Author</th>
                          </tr>
                      </thead>
                      <tbody>
                        {this.getPublicRecipes()}
                      </tbody>
                    </Table>
                    </Jumbotron>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
            
          <div className="container home">
              <Grid>
              <Row className="show-grid">
                <div>            
                  <Col xs={12}>
                  <h2><Glyphicon glyph="star" /> Featured Recipes</h2>
                  </Col>
                  {this.getFeaturedPublicRecipes()}
                </div>
              </Row>
            </Grid>
          </div>
      </div>
    );
  }
}

export default App;
