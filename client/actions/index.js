/**
 * Created by Justin on 2016-02-24.
 */

let nextStockId = 5
export const addStock = (abbr, name, color) => {
  return {
    type: 'ADD_STOCK',
    id: nextStockId++,
    abbr,
    name,
    color
  }
}

export const removeStock = (id) => {
  return {
    type: 'REMOVE_STOCK',
    id
  }
}

export const changeStockColor = (id, newColor) => {
  return {
    type: 'CHANGE_STOCK_COLOR',
    id,
    newColor
  }
}

export const REQUEST_LOOKUP_STOCK_CODE = 'REQUEST_LOOKUP_STOCK_CODE'
function requestLookupStockCode (query) {
  return {
    type: REQUEST_LOOKUP_STOCK_CODE,
    query
  }
}

export const RECEIVE_LOOKUP_STOCK_CODE = 'RECEIVE_LOOKUP_STOCK_CODE'
function receiveLookupStockCode (query, json) {
  return {
    type: RECEIVE_LOOKUP_STOCK_CODE,
    query,
    json
  }
}

// To check if the stock code provided is valid. This will also grab the name.
// http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=AMZN
