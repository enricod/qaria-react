

const stazioniState = (state = { 
         stazioni:[],
         stazioneSelezionata: -1,
         viewName: 'intro',
         inquinanteSelezionato: '',
         misure:[]
      }, action) => {

    switch (action.type) {

        case 'REQUEST_STAZIONI':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });

        case 'RECEIVE_STAZIONI':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                stazioni: action.stazioni,
                lastUpdated: action.receivedAt
            });


        case 'RECEIVE_MISURE':
            /**
             * caricamento delle misure di una stazione e dato un inquinante
             */
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                misure: action.misure
            });     

       case 'ADD_STAZIONE':
            return { 
                ...state,
                stazioni: state.stazioni.concat(action.stazione)
            };

        case 'SET_STAZIONI':
            return { 
                ...state,
                stazioni: action.stazioni
            };

        case 'SELECT_STAZIONE':
          return { 
                ...state,
                stazioneSelezionata: action.id,
                viewName: 'stazione'
            };

        case 'SELECT_INQUINANTE':
          return { 
                ...state,
                inquinanteSelezionato: action.inq,
                stazione: action.stazione
            };    

        default:
            return state
    }

}

export default stazioniState