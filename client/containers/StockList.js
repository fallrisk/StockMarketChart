/**
 * Created by Justin on 2016-02-24.
 */

import { connect } from 'react-redux'

import StockListComponent from '../components/StockList'

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStockClick: (id) => {
      console.log('test')
    }
  }
}

const StockList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockListComponent)

export default StockList
