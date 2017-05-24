/**
 * Created by enrico on 23/05/17.
 */
import React, {Component} from 'react';
import './StazioniElencoComp.css';


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
                <button  onClick={this.selectStazione} >
                    {this.props.stazione.Nome}
                </button>
            </div>
        );
    }
  
}


class StazioniElencoComp extends Component {

    // http://qualita-aria.enricod.it:8080/api/stazioni
    constructor(props) {
        super(props);

        // props.stazioni = elenco stazioni
        // props.stazioneSelezionata = stazione corrente

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
                        stazione={s} />
                )}
            </div>
        );
    }
}

export default StazioniElencoComp;
