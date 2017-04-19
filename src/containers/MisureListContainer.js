import { connect } from 'react-redux'
import MisureListComponent from '../components/MisureListComponent'

/**
 * 
 * @param {stazioniState: {stazioni:[], etc etc}} state 
 */
const mapStateToProps = (state) => {
    return {
        misure: state.stazioniState.misure
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const MisureListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MisureListComponent)


export default MisureListContainer