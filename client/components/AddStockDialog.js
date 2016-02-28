/**
 * Created by Justin on 2016-02-25.
 */

import React, { Component, PropTypes } from 'react'

class AddStockDialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      abbr: ''
    }
    this.onAddClick = this.onAddClick.bind(this)
    this._onInputChange = this._onInputChange.bind(this)
  }

  onAddClick (e) {
    e.preventDefault()
    this.props.onAddClick(this.state.abbr)
    let dialog = document.querySelector('#addStockDialog')
    dialog.close()
  }

  _onInputChange (e) {
    e.preventDefault()
    let state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  render () {
    let closeDialog = () => {
      let dialog = document.querySelector('#addStockDialog')
      dialog.close()
    }

    return (
      <dialog className='mdl-dialog' id='addStockDialog'>
        <div className='mdl-dialog__content'>
          <form action='#'>
            <div className='mdl-textfield'>
              <input className='mdl-textfield__input' type='text' name='abbr' id='stock-name' value={this.state.abbr}
              onChange={this._onInputChange}/>
            </div>
          </form>
        </div>
        <div className='mdl-dialog__actions'>
          <button type='button' className='mdl-button add' onClick={this.onAddClick}>Add</button>
          <button type='button' className='mdl-button cancel' onClick={closeDialog}>Cancel</button>
        </div>
      </dialog>
    )
  }
}

export default AddStockDialog
