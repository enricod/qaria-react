import React, {Component} from 'react';
import Grid from 'react-css-grid'
import axios from 'axios';
import StazioniElencoComp from './StazioniElencoComp.js';
import StazioneComp from './StazioneComp.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stazioni:[], 
            stazioneSelezionata:null
        };

        this.handleSelezioneStazione = this.handleSelezioneStazione.bind(this);
    }

    componentDidMount() {
        axios.get(`http://qualita-aria.enricod.it:8080/api/stazioni`)
            .then(res => {
                const stazioni = res.data.Stazioni; //.map(obj => obj.data);
                this.setState({ stazioni: stazioni });
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
                <div className="MainContent">
                    <Grid col={4} sm={4} md={4} lg={2}>
                        <StazioniElencoComp  
                            stazioni={this.state.stazioni} 
                            stazioneSelezionata={this.state.stazioneSelezionata} 
                            onSelezioneStazione={this.handleSelezioneStazione}
                            />
                    </Grid>
                    <Grid col={8} sm={8} md={8} lg={4}>
                        <StazioneComp stazione={this.state.stazioneSelezionata} />
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
