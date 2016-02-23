var express = require('express')
var router = express.Router()
var debug = require('debug')('StockMarketChart:api')

/* GET home page. */
router.get('/', (req, res) => {
  debug('Getting /.')
  res.status(200).json({
    apiVersion: '1.0'
  })
})

module.exports = router
