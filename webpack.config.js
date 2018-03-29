const {join} = require('path')
const webpack = require('webpack')

const CODE_PATH = join(__dirname, 'src', 'view')

const ENVIRONMENT = process.env.NODE_ENV || 'production'

module.exports = {

    entry: {
      main: join(CODE_PATH, 'index.js')
    },

    mode: ENVIRONMENT,

    module: {
      rules: [
        {test: /\.vue$/, loader: 'vue-loader'}
      ]
    },

    output: {
      path: join(__dirname, 'public'),
      filename: 'dist.js'
    },
}
