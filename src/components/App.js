import React, { Component } from 'react';
import logo from '../logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ElencoStazioniContainer from '../containers/ElencoStazioniContainer'
import MainContainer from '../containers/MainContainer'


import '../App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Qualità aria Lombardia</h2>
        </div>

        <Grid fluid>
          <Row>
            <Col xs={3} md={3}>
              <h1>Stazioni</h1>
               <ElencoStazioniContainer />
            </Col>
            <Col xs={9} md={9}>
              <MainContainer />
            </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}


export default  App;
