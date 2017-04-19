import React from 'react'
//import PropTypes from 'prop-types'


const MisureListComponent = ({ misure }) => (
   <div>
    {misure.map( m => 
        <div key={m.DataMisura + m.Inquinante}>
            {m.DataMisura} {m.Valore}
        </div>
    )}
  </div> 
)

export default MisureListComponent