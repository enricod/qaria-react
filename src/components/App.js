import React, { Component } from 'react';
import logo from '../logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import StazioniVisibili from '../containers/StazioniVisibili'


import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

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
               <StazioniVisibili />
               
            </Col>
            <Col xs={9} md={9}>
              <h1>Hello, world!</h1>
              
            </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}


export default  App;
