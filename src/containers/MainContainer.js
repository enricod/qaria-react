import { connect } from 'react-redux'

import MainComponent from '../components/MainComponent'
import {findIndex} from 'lodash'


 // cerca la stazione dato l'Id stazione
function trovaStazioneDatoId(stazioni, id) {
    const stazSelezionataIdx = findIndex(stazioni, (s) => {
                return s.StazioneId === id;
            }
        );
    return stazioni[stazSelezionataIdx];
}
/**
 * 
 * @param {stazioniState: {stazioni:[], etc etc}} state 
 */
const mapStateToProps = (state) => {
    return {
        viewName: state.stazioniState.viewName,
        stazSelezionata: trovaStazioneDatoId(
                state.stazioniState.stazioni, 
                state.stazioniState.stazioneSelezionata)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)

export default MainContainer