/**
 * Created by Justin on 2016-02-24.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addStock } from '../actions'

let AddStock = ({ dispatch }) => {
  let input

  return (
    <button className='mdl-button mdl-js-button mdl-button--fab mdl-button--colored' id='add'>
      <i className='material-icons'>add</i>
    </button>
  )
}
AddStock = connect()(AddStock)

export default AddStock
