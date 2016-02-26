import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import StockChart from '../components/StockChart'
import StockList from '../containers/StockList'

class StockViewer extends Component {
  render () {
    return (
      <div>
        <StockChart />
        <StockList />
      </div>
    )
  }
}

export default StockViewer
