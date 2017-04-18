import { connect } from 'react-redux'
import { selectStazione } from '../actions'
import MainComponent from '../components/MainComponent'
import {findIndex} from 'lodash'
/**
 * 
 * @param {stazioniState: {stazioni:[], etc etc}} state 
 */
const mapStateToProps = (state) => {

    // cerca la stazione dato l'Id stazione
    const idx = state.stazioniState.stazioneSelezionata;
    const stazSelezionataIdx = findIndex( state.stazioniState.stazioni,
            function(s) {
                    return s.StazioneId === idx;
            }
        );
    
    return {
        viewName: state.stazioniState.viewName,
        stazSelezionata: state.stazioniState.stazioni[stazSelezionataIdx]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStazioneClick: (id) => {
            console.log("selezionata stazione " + id);
            dispatch(selectStazione(id))
        }
    }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)

export default MainContainer