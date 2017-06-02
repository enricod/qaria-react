import React, {Component} from 'react';
//import Grid from 'react-css-grid'
import axios from 'axios';
import StazioniElenco from './StazioniElenco.js';
import Stazione from './Stazione.js';
// import logo from './logo.svg';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stazioni: [],
            stazioneSelezionata: null
        };

        this.handleSelezioneStazione = this.handleSelezioneStazione.bind(this);
    }

    componentDidMount() {
        // http://qualita-aria.enricod.it:8080/api/stazioni
        axios.get(`http://qualita-aria.enricod.it:8080/api/stazioni`)
            .then(res => {
                const stazioni = res.data.Stazioni; //.map(obj => obj.data);
                this.setState({stazioni: stazioni});
            });
    }


    handleSelezioneStazione(staz) {
        this.setState({
            stazioneSelezionata: staz
        })
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to Qaria</h2>
                </div>
                <Grid className="MainContent">
                    <Row>
                        <Col xs={12} md={3}>
                            <StazioniElenco
                                stazioni={this.state.stazioni}
                                stazioneSelezionata={this.state.stazioneSelezionata}
                                onSelezioneStazione={this.handleSelezioneStazione}
                            />
                        </Col>
                        <Col xs={12} md={9}>
                            <Stazione stazione={this.state.stazioneSelezionata}/>
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default App;
