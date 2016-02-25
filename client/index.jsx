import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import stockApp from './reducers'
import App from './components/App'

const sampleStocks = [
  {id: 1, name: 'Amazon Inc.', abbr: 'AMZN'},
  {id: 2, name: 'Google Inc.', abbr: 'GOOG'},
  {id: 3, name: 'First Solar Inc.', abbr: 'FSLR'},
  {id: 4, name: 'Apple', abbr: 'AAPL'}
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
