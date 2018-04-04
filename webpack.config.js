const { join } = require('path')

const path = (...pathParts) => join(__dirname, 'src', ...pathParts)

const ENVIRONMENT = process.env.NODE_ENV || 'production'

module.exports = {

  entry: {
    main: path('view', 'index.js'),
  },

  mode: ENVIRONMENT,

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
    ],
  },

  output: {
    path: path('public'),
    filename: 'dist.js',
  },
}
