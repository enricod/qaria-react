import React from 'react'
import PropTypes from 'prop-types'

const Stazione = ({ onClick, nome, stazioneId }) => (
  <div onClick={onClick} >
    {nome}
  </div>
)


Stazione.propTypes = {
  onClick: PropTypes.func.isRequired,
  nome: PropTypes.string.isRequired,
  stazioneId: PropTypes.number.isRequired
}


export default Stazione