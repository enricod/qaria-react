import React from 'react'
//import PropTypes from 'prop-types'


const MisureListComponent = ({ misure }) => (
   <div>
    {misure.map( m => 
        <div>
            {m.DataMisura}
        </div>
    )}
  </div> 
)

export default MisureListComponent