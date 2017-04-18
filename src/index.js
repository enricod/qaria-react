import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import qariaReducer from './reducers'
import { fetchStazioni } from './actions'
import './index.css';

// let store = createStore(qariaApp)
const loggerMiddleware = createLogger()

const store = createStore(
  qariaReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)


store.dispatch(fetchStazioni()).then(() =>
  console.log( "ho caricato le stazioni ")
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
