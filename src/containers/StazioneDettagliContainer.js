import { connect } from 'react-redux'
import { selectInquinante, fetchMisure } from '../actions'
import StazioneDettagliComponent from '../components/StazioneDettagliComponent'

/**
 * 
 */
const mapStateToProps = (state) => {
    let stazioneIdx = state.stazioniState.stazioni
        .findIndex(s =>s.StazioneId === state.stazioniState.stazioneSelezionata);
    
    return {
        stazione: state.stazioniState.stazioni[stazioneIdx],
        inquinanteSelezionato: state.stazioniState.inquinanteSelezionato
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInquinanteClick: (stazione, inq) => {
            dispatch(selectInquinante(stazione, inq))
            dispatch(fetchMisure(stazione.StazioneId, inq))
        }
    }
}

const StazioneDettagliContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StazioneDettagliComponent)

export default StazioneDettagliContainer