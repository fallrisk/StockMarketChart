import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import StockList from '../containers/StockList'

class StockViewer extends Component {
  render () {
    var onStockClick = (stockId) => {
      console.log(stockId)
    }

    return (
      <div>
        <StockList onStockClick={onStockClick} />
      </div>
    )
  }
}

export default StockViewer
