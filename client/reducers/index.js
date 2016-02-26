/**
 * Created by Justin on 2016-02-23.
 */

import { combineReducers } from 'redux'

const stock = (state, action) => {
  switch (action.type) {
    case 'ADD_STOCK':
      return {
        id: action.id,
        abbr: action.abbr
      }
    default:
      return state
  }
}

const stocks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STOCK':
      return [
        ...state,
        stock(undefined, action)
      ]
    case 'REMOVE_STOCK':
      let index = -1
      for (var i = 0; i < state; i++) {
        if (state[i].id === action.id) {
          index = i
          break
        }
      }
      return [
        ...state.slice(0, index)
      ]
    default:
      return state
  }
}

const stockApp = combineReducers({
  stocks
})

export default stockApp
