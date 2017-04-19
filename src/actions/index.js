import fetch from 'isomorphic-fetch'

export const REQUEST_STAZIONI = 'REQUEST_STAZIONI'
export const RECEIVE_STAZIONI = 'RECEIVE_STAZIONI'
export const SET_STAZIONI = 'SET_STAZIONI'
export const API_BASE_URL = 'http://qaria-148716.appspot.com/api'

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

export function selectStazione(id) {
  return {
    type: SELECT_STAZIONE,
    id
  }
}

export function selectInquinante(stazione, inq) {
  return {
    type: 'SELECT_INQUINANTE',
    stazione: stazione,
    inq: inq
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

function receiveMisure(json) {
    return {
        type: 'RECEIVE_MISURE',
        misure: json.Misure,
        receivedAt: Date.now()
    }
}


export function fetchStazioni() {

  return function (dispatch) {
    dispatch(requestStazioni())
    return fetch( API_BASE_URL + `/stazioni`)
      .then(response => response.json())
      .then(json => {
          dispatch(receiveStazioni(json))
        }
    )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}


export function fetchMisure(stazioneId, inq) {

  return function (dispatch) {
    
    return fetch(API_BASE_URL + `/misureStazione?StazioneId=` + stazioneId + "&Inquinante=" + inq )
      .then(response => response.json())
      .then(json => {
          dispatch(receiveMisure(json))
        }
    )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

