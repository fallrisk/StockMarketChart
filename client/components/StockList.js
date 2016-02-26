/**
 * Created by Justin on 2016-02-24.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const sampleFunc = function () {
  console.log('sample func')
}

const Stock = ({id, name, abbr, color, onStockClick, onColorClick, onRemoveClick}) => (
  <li className='mdl-list__item stock'>
        <span className='mdl-list__item-primary-content' onClick={sampleFunc}>
          <span className='abbr'>{abbr}</span>
          <span className='name'>{name}</span>
        </span>
    <div className='actions'>
      <button
        className={'mdl-button mdl-js-button mdl-button--icon ' + color}
        onClick={onColorClick}
      ><i className='material-icons'>color_lens</i></button>
      <button
        className='mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-button--accent'
        onClick={onRemoveClick}
      ><i className='material-icons'>delete</i></button>
    </div>
  </li>
)

Stock.propTypes = {
  onStockClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onColorClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  abbr: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

const StockList = ({stocks, onStockClick, onStockRemoveClick, onStockColorClick}) => (
  <div className='stock-list mdl-shadow--2dp mdl-color--white'>
    <ul className='mdl-list'>
      {stocks.map((stock) =>
        <Stock
          key={stock.id}
          {...stock}
          onStockClick={() => { onStockClick(stock.id); console.log('test') }}
          onRemoveClick={() => onStockRemoveClick(stock.id)}
          onColorClick={() => onStockColorClick(stock.id)}
        />
      )}
    </ul>
  </div>
)

StockList.propTypes = {
  stocks: PropTypes.array.isRequired,
  onStockClick: PropTypes.func.isRequired,
  onStockRemoveClick: PropTypes.func.isRequired,
  onStockColorClick: PropTypes.func.isRequired
}

export default StockList
