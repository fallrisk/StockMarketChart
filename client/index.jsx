import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import stockApp from './reducers'
import App from './components/App'

const sampleStocks = [
  {id: 1, name: 'Amazon Inc.', abbr: 'AMZN', color: 'mdl-color--amber-400'},
  {id: 2, name: 'Google Inc.', abbr: 'GOOG', color: 'mdl-color--purple-400'},
  {id: 3, name: 'First Solar Inc.', abbr: 'FSLR', color: 'mdl-color--green-400'},
  {id: 4, name: 'Apple', abbr: 'AAPL', color: 'mdl-color--blue-400'}
]

const initialState = {
  stocks: sampleStocks
}

let store = createStore(stockApp, initialState)

render (
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)
