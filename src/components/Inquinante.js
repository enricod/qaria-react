import React from 'react'
import PropTypes from 'prop-types'

const Inquinante = ({ onClick,  stazioneId, inq }) => (
  <span onClick={onClick} >
    {inq} &nbsp;
  </span> 
)


Inquinante.propTypes = {
  onClick: PropTypes.func.isRequired,
  stazioneId: PropTypes.number.isRequired,
  inq: PropTypes.string.isRequired
}


export default Inquinante