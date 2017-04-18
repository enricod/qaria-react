import React from 'react'
import PropTypes from 'prop-types'
import Inquinante from './Inquinante'
import MisureListContainer from '../containers/MisureListContainer'

const StazioneDettagliComponent = ({ staz, onInquinanteClick }) => (

  <div>
    <h1>{staz.Nome}</h1>
    <div>
        {staz.Inquinanti.split(',').map(inq =>

            <Inquinante
              key={staz.StazioneId + inq}
              onClick={() => onInquinanteClick(staz.StazioneId, inq)} 
              stazioneId={staz.StazioneId}
              inq={inq}
            />)
        }
    </div>
    <div>
      <MisureListContainer />
    </div>
  </div>
)

  
StazioneDettagliComponent.propTypes = {
  staz:PropTypes.shape({
    StazioneId: PropTypes.number.isRequired,
    Nome: PropTypes.string.isRequired
  }).isRequired,
  onInquinanteClick: PropTypes.func.isRequired
}


export default StazioneDettagliComponent