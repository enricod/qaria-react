/**
 * Created by enrico on 23/05/17.
 */
import React, {Component} from 'react';
// import axios from 'axios';
import TabPanel, { TabStrip } from 'react-tab-panel'
import 'react-tab-panel/index.css'
import './StazioneComp.css';

class StazioneInquinanteTabella extends Component {
    render() {
        return(
            <div>tabella ...</div>
        );
    }
}

class StazioneInquinanteGrafico extends Component {
    render() {
        return(
            <div>Grafico ...</div>
        );
    }
}

class InquinanteBtn extends Component {
  constructor(props) {
    super(props);
    this.handleSelezioneInq = this.handleSelezioneInq.bind(this);
  }
  handleSelezioneInq() {
    this.props.onSelezioneInquinante(this.props.inq);
  }

  render() {
    return (<button key={this.props.inq} onClick={this.handleSelezioneInq}>{this.props.inq}</button>);
  }
}

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
        buttons.push(<InquinanteBtn inq={i}
            onSelezioneInquinante={this.handleSelezioneInq} />);
      });
    }
    return(  <div>{buttons}</div> );
  }
}

class StazioneComp extends Component {

    constructor(props) {
      super(props);
      this.state = {
        inquinanteSelezionato:''
      }
      this.handleSelezioneInquinante = this.handleSelezioneInquinante.bind(this);
    }

    handleSelezioneInquinante(inq) {
        this.setState({
            inquinanteSelezionato: inq
        })
    }
    
    render() {
        const isPresent = this.props.stazione;
        if (isPresent) {
            return (
                <div className="StazioneComp">
                    <h3>{this.props.stazione.Nome}</h3>
                    <StazioneInquinanti
                        inquinanti={this.props.stazione.Inquinanti.split(',')}
                        onSelezioneInquinante={this.handleSelezioneInquinante} />
                    <div >
                      Selezionato: {this.state.inquinanteSelezionato}
                    </div>
                    <TabPanel>
                      <div tabTitle="Grafico">
                        <StazioneInquinanteGrafico />
                      </div>
                      <div tabTitle="Dati in tabella">
                        <StazioneInquinanteTabella />
                      </div>
                    </TabPanel>
                </div>
            );
        } else {
            return <p>Seleziona una stazione</p>;
        }
    }
}

export default StazioneComp;
