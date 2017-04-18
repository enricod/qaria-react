import React from 'react'
// import PropTypes from 'prop-types'
import StazioneDettagliContainer from '../containers/StazioneDettagliContainer'

const MainComponent =( {viewName, stazSelezionata} ) => {
    
    if (viewName === 'stazione') {
        return (
            <StazioneDettagliContainer
                key={stazSelezionata.StazioneId}
                {...stazSelezionata}
                staz={stazSelezionata}
            />
        )

    } else {
        return (
            <div>
                <h1>Benvenuti in QAria</h1>
                <p>Raccolta di dati sull'inquinamento dell'aria in Lombardia</p>
            </div>
        )
    }
}


  


export default MainComponent