import React from 'react'
import PropTypes from 'prop-types'
import Stazione from './Stazione'

const StazioneList = ({ stazioni, onStazioneClick }) => (
  <div>
    {stazioni.map(staz =>
      <Stazione
        key={staz.StazioneId}
        {...staz}
        onClick={() => onStazioneClick(staz.StazioneId)}
        nome={staz.Nome}
        stazioneId={staz.StazioneId}
      />
    )}
  </div>
)

  
StazioneList.propTypes = {
  stazioni: PropTypes.arrayOf(PropTypes.shape({
    StazioneId: PropTypes.number.isRequired,
    Nome: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onStazioneClick: PropTypes.func.isRequired
}

export default StazioneList