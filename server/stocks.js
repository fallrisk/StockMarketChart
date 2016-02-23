/**
 * Created by Justin on 2016-02-19.
 *
 * http://dev.markitondemand.com/MODApis/
 * http://dev.markitondemand.com/Api/v2/InteractiveChart
 */

var fetch = require('node-fetch')

/**
 *
 * @param stockName Array of stock names.
 */
function fetchStock (stockName) {
  const url = 'http://dev.markitondemand.com/Api/v2/InteractiveChart/json?input=' + stockName
  return fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      return json
    })
}

export default {
  fetchStock: fetchStock
}
