/**
 * Created by Justin on 2016-02-28.
 */

import { connect } from 'react-redux'

import { default as AddStockDialogComponent } from '../components/AddStockDialog'
import { addStock } from '../actions'
import { getRandomColor } from '../MaterialColors'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (abbr) => {
      // console.log('Add clicked: ' + abbr)
      dispatch(addStock(abbr, '', getRandomColor('400')))
    }
  }
}

const AddStockDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStockDialogComponent)

export default AddStockDialog
