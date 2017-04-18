import { connect } from 'react-redux'
import { selectInquinante } from '../actions'
import StazioneDettagliComponent from '../components/StazioneDettagliComponent'

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
        onInquinanteClick: (stazioneId, inq) => {
            dispatch(selectInquinante(stazioneId, inq))
        }
    }
}

const StazioneDettagliContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StazioneDettagliComponent)

export default StazioneDettagliContainer