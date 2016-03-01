/**
 * Created by Justin on 2016-02-23.
 */

import { combineReducers } from 'redux'

const stock = (state, action) => {
  switch (action.type) {
    case 'ADD_STOCK':
      return {
        id: action.id,
        abbr: action.abbr,
        name: action.name,
        color: action.color
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
      return state.filter((v) => {
        return !(v.id === action.id)
      })
    default:
      return state
  }
}

const stockApp = combineReducers({
  stocks
})

export default stockApp
