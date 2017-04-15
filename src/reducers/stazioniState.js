

const stazioniState = (state = { 
         stazioni:[],
         stazioneSelezionata: -1
      }, action) => {
/*
    console.log("~~~~~~~~~~~~~~~~~~~");
    console.log(action);
    console.log("~~~~~~~~~~~~~~~~~~~");
*/
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
        default:
            return state
    }

}

export default stazioniState