import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import OrganizationsList from '../OrganizationsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pipefy GraphQL API & Apollo Client</h2>
        </div>

        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <OrganizationsList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
