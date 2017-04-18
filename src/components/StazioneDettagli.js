import React from 'react'
import PropTypes from 'prop-types'
//import Stazione from './Stazione'

const StazioneDettagli = ({ staz }) => (

  <div>
    <h1>{staz.Nome}</h1>
    <div>
        {staz.Inquinanti.split(',').map(inq =>
            <span key={inq}>{inq} &nbsp; </span>  )
        }
    </div>
  </div>
)

  
StazioneDettagli.propTypes = PropTypes.shape({
    StazioneId: PropTypes.number.isRequired,
    Nome: PropTypes.string.isRequired
  }).isRequired
  // onStazioneClick: PropTypes.func.isRequired


export default StazioneDettagli