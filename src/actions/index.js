import fetch from 'isomorphic-fetch'

export const REQUEST_STAZIONI = 'REQUEST_STAZIONI'
export const RECEIVE_STAZIONI = 'RECEIVE_STAZIONI'
export const SET_STAZIONI = 'SET_STAZIONI'


/**
 * $r.store.dispatch({type:'SET_STAZIONI', stazioni:[{StazioneId:24, Nome:"JJJJ"}, {Stazione:12, Nome:"13"}]})
 * 
 * @param {*} stazioni 
 */

export const setStazioni = (stazioni) => {
  return {
    type: SET_STAZIONI,
    stazioni: stazioni
  }
}

/**
 * $r.store.dispatch({type:'ADD_STAZIONE', stazione:{StazioneId:24, Nome:"JJJJ"}})
 * 
 * @param {*} stazione 
 */
export const addStazione = (stazione) => {
  return {
    type: 'ADD_STAZIONE',
    stazione: stazione
  }
}


export const SELECT_STAZIONE = 'SELECT_STAZIONE'

export function selectStazione(stazione) {
  return {
    type: SELECT_STAZIONE,
    stazione
  }
}

function requestStazioni() {
  return {
    type: REQUEST_STAZIONI
  }
}

function receiveStazioni(json) {
    return {
        type: RECEIVE_STAZIONI,
        stazioni: json.Stazioni,
        receivedAt: Date.now()
    }
}


export function fetchStazioni() {

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestStazioni())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://qaria-148716.appspot.com/api/stazioni`)
      .then(response => response.json())
      .then(json => {
          console.log( json )
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.

          dispatch(receiveStazioni(json))
        }
    )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

