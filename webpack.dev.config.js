/**
 * Created by Justin on 2016-02-18.
 */

var path = require('path')

module.exports = {
  entry: './client/index.jsx',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: __dirname
      }
    ]
  }
}
