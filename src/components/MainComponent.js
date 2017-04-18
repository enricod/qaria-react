import React from 'react'
// import PropTypes from 'prop-types'
import StazioneDettagli from './StazioneDettagli'

const MainComponent =( {viewName, stazSelezionata} ) => {
    
    if (viewName == 'stazione') {
        return (
            <StazioneDettagli 
                key={stazSelezionata.StazioneId}
                {...stazSelezionata}
                staz={stazSelezionata}
            />
        )

    } else {
        return (
            <div>
                <h1>{viewName}</h1>
            </div>
        )
    }
}


  


export default MainComponent