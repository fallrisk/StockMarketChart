/**
 * Created by Justin on 2016-02-25.
 */

import React, { Component, PropTypes } from 'react'

class AddStockDialog extends Component {
  render () {
    return (
      <dialog className='mdl-dialog'>
        <div className='mdl-dialog__content'>
          <form action='#'>
            <div class='mdl-textfield mdl-js-textfield'>
              <input class='mdl-textfield__input' type='text' id='stock-name'/>
              <label class='mdl-textfield__label' for='stock-name'>Stock abbreviation</label>
            </div>
          </form>
        </div>
        <div className='mdl-dialog__actions'>
          <button type='button' className='mdl-button'>Add</button>
          <button type='button' className='mdl-button close'>Cancel</button>
        </div>
      </dialog>
    )
  }
}

export default AddStockDialog
