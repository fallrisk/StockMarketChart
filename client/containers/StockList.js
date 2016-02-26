/**
 * Created by Justin on 2016-02-24.
 */

import { connect } from 'react-redux'

import { default as StockListComponent } from '../components/StockList'
import { removeStock } from '../actions'

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStockClick: (id) => {
      console.log('Stock clicked: ' + id)
    },
    onStockRemoveClick: (id) => {
      console.log('Remove clicked for id: ' + id)
      dispatch(removeStock(id))
    },
    onStockColorClick: (id) => {
      console.log('Color clicked for id: ' + id)
    }
  }
}

const StockList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockListComponent)

export default StockList
