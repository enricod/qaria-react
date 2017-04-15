import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
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
        onTodoClick: (id) => {
        //dispatch(toggleTodo(id))
        }
    }
}

const StazioniVisibili = connect(
  mapStateToProps,
  mapDispatchToProps
)(StazioneList)

export default StazioniVisibili