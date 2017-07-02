/**
 * Created by enrico on 23/05/17.
 */
import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './StazioniElenco.css';


/**
 * bottone in barra sinistra per scelta stazione
 */
class StazioneItem extends Component {
    constructor(props) {
        super(props);
        this.selectStazione = this.selectStazione.bind(this);
    }

    selectStazione() {
        this.props.onStazioneClick(this.props.stazione)
    }

    render() {
        return (
            <div>
                <Button bsSize="large" block onClick={this.selectStazione}>
                    {this.props.stazione.Nome}
                </Button>
            </div>
        );
    }
}

StazioneItem.propTypes = {
    stazione: PropTypes.object
};





class StazioniElenco extends Component {

     constructor(props) {
        super(props);
        this.handleSelezioneStazione = this.handleSelezioneStazione.bind(this);
    }

    handleSelezioneStazione(staz) {
        this.props.onSelezioneStazione(staz);
    }

    render() {
        return (
            <div className="StazioniElencoComp">
                <h3>Stazioni</h3>
                {this.props.stazioni.map(s =>
                    <StazioneItem key={s.StazioneId}
                                  onStazioneClick={this.handleSelezioneStazione}
                                  stazione={s}
                                  
                                  />
                )}
            </div>
        );
    }
}

StazioniElenco.propTypes = {
    stazioni: PropTypes.array,
    stazioneSelezionata: PropTypes.object
};

export default StazioniElenco;
