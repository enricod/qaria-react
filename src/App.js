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
            stazioneSelezionata: null,
            baseApiUrl:'https://qualita-aria.enricod.it/api'
        };

        this.handleSelezioneStazione = this.handleSelezioneStazione.bind(this);
    }

    componentDidMount() {
        axios.get( `${this.state.baseApiUrl}/stazioni`)
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
                                baseApiUrl={this.state.baseApiUrl}
                            />
                        </Col>
                        <Col xs={12} md={9}>
                            <Stazione stazione={this.state.stazioneSelezionata}
                                        baseApiUrl={this.state.baseApiUrl}
                                        />
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default App;
