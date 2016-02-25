/**
 * Created by Justin on 2016-02-24.
 */

import React from 'react'
import StockViewer from '../components/StockViewer.jsx'
import AddStockButton from '../containers/AddStock'

var onAddStockClick = () => {
  console.log('Adding a stock.')
}

const App = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Stock Chart</span>
        <div className="mdl-layout-spacer"></div>
      </div>
      <AddStockButton onClick={onAddStockClick} />
    </header>
    <div className="mdl-layout__drawer">
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">GitHub Repo.</a>
        <a className="mdl-navigation__link" href="/readme">README</a>
      </nav>
    </div>
    <main className="mdl-layout__content">
      <div className="page-content">
        <StockViewer />
      </div>
    </main>
  </div>
)

export default App
