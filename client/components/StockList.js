/**
 * Created by Justin on 2016-02-24.
 */

import React, { Component, PropTypes } from 'react'

class Stock extends Component {
  render () {
    return (
      <li onClick={this.props.onClick}>
        <span>{this.props.name}</span>
        <span>{this.props.abbr}</span>
      </li>
    )
  }
}

Stock.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  abbr: PropTypes.string.isRequired
}

class StockList extends Component {
  render () {
    const stocks = this.props.stocks.map((stock) => {
      return (
        <Stock key={stock.id} name={stock.name} abbr={stock.abbr}
               onClick={() => this.props.onStockClick(stock.id)}/>
      )
    })

    return (
      <ul>
        {stocks}
      </ul>
    )
  }
}

StockList.propTypes = {
  stocks: PropTypes.array.isRequired,
  onStockClick: PropTypes.func.isRequired
}

export default StockList
