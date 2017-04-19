import React from 'react'
import PropTypes from 'prop-types'
import Inquinante from './Inquinante'
import MisureListContainer from '../containers/MisureListContainer'

const StazioneDettagliComponent = ({ staz, inquinanteSelezionato, misure, onInquinanteClick }) => (

  <div>
    <h1>{staz.Nome}</h1>
    <div>
        {staz.Inquinanti.split(',').map(inq =>
            <Inquinante
              key={staz.StazioneId + inq}
              onClick={() => onInquinanteClick(staz, inq)} 
              stazioneId={staz.StazioneId}
              inq={inq}
            />)
        }
    </div>
    <div>
      {inquinanteSelezionato.length > 0 &&
        <MisureListContainer 
              key="" 
              stazione={staz}  
              inq={inquinanteSelezionato} 
              misure={misure} />
      }
    </div>
  </div>
)

/**
 * 
 * 
 * 
 * 
 */
  
StazioneDettagliComponent.propTypes = {
  staz:PropTypes.shape({
    StazioneId: PropTypes.number.isRequired,
    Nome: PropTypes.string.isRequired
  }).isRequired,
  onInquinanteClick: PropTypes.func.isRequired
}


export default StazioneDettagliComponent