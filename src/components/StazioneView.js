import React from 'react'
import PropTypes from 'prop-types'

const StazioneView = ({ stazione }) => (
  <div>
    <h1>{stazione.Nome}</h1>
    <div>
        <h2>Inquinanti</h2>
    </div>
    
  </div>
)


StazioneView.propTypes = {
  
 
}


export default StazioneView