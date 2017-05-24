/**
 * Created by enrico on 23/05/17.
 */
import React, {Component} from 'react';
// import axios from 'axios';
import './StazioniElencoComp.css';

class StazioneComp extends Component {

    // http://qualita-aria.enricod.it:8080/api/stazioni
    constructor(props) {
        super(props);
    }

    render() {
        const isPresent = this.props.stazione;
        if (isPresent) {
            return (
                <div >
                    <h3>{this.props.stazione.Nome}</h3>
                </div>
            );

        } else {
            return <p>Seleziona una stazione</p>;
        }
    }
}

export default StazioneComp;