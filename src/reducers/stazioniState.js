

const stazioniState = (state = { 
         stazioni:[],
         stazioneSelezionata: -1,
         viewName: 'intro'
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

        default:
            return state
    }

}

export default stazioniState