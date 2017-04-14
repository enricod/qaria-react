import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';



class ElencoStazioni extends Component {

  constructor() {
    super();
    this.state = {
      stazioni: [],
    };
  }

  componentDidMount() {
    axios.get(`http://qaria-148716.appspot.com/api/stazioni`)
      .then(res => {
        
        const posts = res.data.Stazioni;
        console.log(posts);
        this.setState( {stazioni:  posts}) ;
      });
  }

  render() {
    return (
      <div>
        <h1>Stazioni</h1>
        {this.state.stazioni.map((s) =>
            <div key={s.StazioneId}>{s.Nome}</div>
        )}
      </div>
    );
  }

}


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Qualità aria Lombardia</h2>
        </div>

        <ElencoStazioni />
      </div>
    );
  }
}

export default App;
