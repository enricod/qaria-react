import { connect } from 'react-redux'
import { selectStazione } from '../actions'
import StazioneList from '../components/StazioneList'

/**
 * 
 * @param {stazioniState: {stazioni:[], etc etc}} state 
 */
const mapStateToProps = (state) => {
    return {
        stazioni: state.stazioniState.stazioni
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

const StazioniVisibili = connect(
  mapStateToProps,
  mapDispatchToProps
)(StazioneList)

export default StazioniVisibili