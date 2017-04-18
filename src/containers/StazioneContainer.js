import { connect } from 'react-redux'
import { selectStazione } from '../actions'
import StazioneDettagli from '../components/StazioneDettagli'

/**
 * 
 */
const mapStateToProps = (state) => {
    let stazioneIdx = state.stazioniState.stazioni
        .findIndex(s =>s.StazioneId === state.stazioniState.stazioneSelezionata);
    
    return {
        stazione: state.stazioniState.stazioni[stazioneIdx]
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

const StazioneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StazioneDettagli)

export default StazioneContainer