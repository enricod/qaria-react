/**
 * Created by enrico on 23/05/17.
 */
import React, {Component} from 'react';
import axios from 'axios';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Table} from 'react-bootstrap';

import './Stazione.css';


var inquinantiDefs = {
    PM10 : {
        um:'\u03BCg/m\u00B3',
        valoreLimite:50
    },
    NO2 : {
        um:'\u03BCg/m\u00B3',
        "valoreLimite":200,
        "sogliaAllarme": 400
    },
    "CO" : {
        "um":'\u03BCg/m\u00B3',
        "valoreLimite":10,
        "sogliaAllarme": 0
    },
    "PM25" : {
        "um":'',
        "valoreLimite":0,
        "sogliaAllarme": 0
    },
    "SO2" : {
        "um":'',
        "valoreLimite":0,
        "sogliaAllarme": 0
    },
    "O3" : {
        "um":'',
        "valoreLimite":0,
        "sogliaAllarme": 0
    }
}
class StazioneInquinanteTabella extends Component {
    render() {
        var rows = [];
        if (this.props.misure) {
            this.props.misure.forEach((i) => {
                rows.push(
                    <tr key={i.DataMisura}>
                        <td  >{i.DataMisura}</td>
                        <td  >{i.Valore} {inquinantiDefs[this.props.inq].um}</td>
                    </tr>);
            });
        }
        return (
            <Table>
                <colgroup>
                    <col width="20%" />
                    <col width="80%" />
                </colgroup>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Valore</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table> );
    }
}

StazioneInquinanteTabella.propTypes = {
    misure: PropTypes.array.isRequired,
    inq: PropTypes.string
};

class StazioneInquinanteGrafico extends Component {
    render() {
        var data = [];
        if (this.props.misure) {
            this.props.misure.forEach((i) => {
                var punto = {};
                punto.name = i.DataMisura;
                punto.inq = i.Valore;
                data.push( punto )
            });
        }
        /*
        var data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];
        */
        return (
            <LineChart width={700} height={500} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey='inq' stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        );
    }
}

StazioneInquinanteGrafico.propTypes = {
    misure: PropTypes.array.isRequired
};


/**
 * bottone per scelta inquinante
 */
class InquinanteBtn extends Component {

    constructor(props) {
        super(props);
        this.handleSelezioneInq = this.handleSelezioneInq.bind(this);
    }

    handleSelezioneInq() {
        this.props.onSelezioneInquinante(this.props.inq);
    }

    render() {
        return (<Button key={this.props.inq} onClick={this.handleSelezioneInq}>{this.props.inq}</Button>);
    }
}


/**
 * elenco bottoni per inquinanti
 */
class StazioneInquinanti extends Component {

    constructor(props) {
        super(props);
        this.handleSelezioneInq = this.handleSelezioneInq.bind(this);
    }

    handleSelezioneInq(inq) {
        this.props.onSelezioneInquinante(inq);
    }

    render() {
        var buttons = [];
        if (this.props.inquinanti) {
            this.props.inquinanti.forEach((i) => {
                buttons.push(<InquinanteBtn key={i} inq={i}
                                            onSelezioneInquinante={this.handleSelezioneInq}/>);
            });
        }
        return (  <ButtonGroup>{buttons}</ButtonGroup> );
    }
}


class Stazione extends Component {

    constructor(props) {
        super(props);

        // props.stazione = stazione corrente
        this.state = {
            inquinanteSelezionato: '',
            misure: []
        };

        this.handleSelezioneInquinante = this.handleSelezioneInquinante.bind(this);
    }

    handleSelezioneInquinante(inq) {
        // caricamento dei dati di inquinamento
        axios.get('http://qualita-aria.enricod.it:8080/api/misure/' +
            this.props.stazione.StazioneId + '/' + inq)
            .then(res => {
                this.setState({
                    inquinanteSelezionato: inq,
                    misure: res.data.Misure
                })
            });
    }

    render() {
        const staz = this.props.stazione;
        var valoreLimite = '';
        if (this.state.inquinanteSelezionato) {
            valoreLimite = inquinantiDefs[this.state.inquinanteSelezionato].valoreLimite + ' ' + inquinantiDefs[this.state.inquinanteSelezionato].um;
        }
        if (staz) {
            return (
                <div className="StazioneComp">
                    <h3>{staz.Nome}</h3>

                    <p>Valore limite: {valoreLimite} </p>

                    <StazioneInquinanti
                        inquinanti={staz.Inquinanti.split(',')}
                        onSelezioneInquinante={this.handleSelezioneInquinante} />
                    <div className="inquinanteSelezionato">
                        Selezionato: {this.state.inquinanteSelezionato}
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Grafico</Tab>
                            <Tab>Tabella</Tab>
                        </TabList>
                        <TabPanel>
                            <StazioneInquinanteGrafico misure={this.state.misure} />
                        </TabPanel>
                        <TabPanel>
                            <StazioneInquinanteTabella
                                misure={this.state.misure}
                                inq={this.state.inquinanteSelezionato}/>
                        </TabPanel>
                    </Tabs>
                </div>
            );
        } else {
            return <p>Seleziona una stazione</p>;
        }
    }
}

Stazione.propTypes = {
    stazione: PropTypes.object
};

export default Stazione;
