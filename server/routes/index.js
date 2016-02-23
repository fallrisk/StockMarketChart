var express = require('express')
var router = express.Router()
var marked = require('marked')
var fs = require('fs')
var path = require('path')

router.get('/readme', (req, res) => {
  // res.render('index', { title: 'Express' })

  // Render the README file.
  return new Promise(function (resolve, reject) {
    fs.readFile('README.md', 'utf8', function (err, data) {
      if (err) reject(err)
      resolve(data)
    })
  }).then(function (val) {
    const readme = marked(val.toString())
    const html = '<html><head><link rel="stylesheet" href="public/style.css"/></head><body>' + readme + '</body></html>'
    res.status(200).send(html)
  })
})

router.get('/', (req, res) => {
  // res.render('index', { title: 'Stock Market Chart' })
  res.sendFile(path.join(__dirname, '../index.html'))
})

module.exports = router
