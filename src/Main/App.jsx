import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import logo from './logo.svg';
import './App.css';

import OrganizationsList from '../OrganizationsList'
import PipesList from '../PipesList'

class App extends Component {

  renderPipesListRow() {
    return (
      <Row className="show-grid">
        <Col xs={12} md={4}>
          <PipesList selectedOrganizationId={this.props.selectedOrganizationId} />
        </Col>
      </Row>
    )
  }

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

          { this.props.selectedOrganizationId && this.renderPipesListRow() }
        </Grid>
      </div>
    );
  }
}

export default App;
