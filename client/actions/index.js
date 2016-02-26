/**
 * Created by Justin on 2016-02-24.
 */

let nextStockId = 0
export const addStock = (abbr) => {
  return {
    type: 'ADD_STOCK',
    id: nextStockId++,
    abbr
  }
}

export const removeStock = (id) => {
  return {
    type: 'REMOVE_STOCK',
    id
  }
}

export const changeStockColor = (id) => {
  return {
    type: 'CHANGE_STOCK_COLOR',
    id
  }
}
