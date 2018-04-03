const express = require('express')
const { join } = require('path')
const { winstonMiddleware } = require('./logger')

module.exports = () =>
  express()
    .use(winstonMiddleware)
    .use(express.static(join(__dirname, 'public')))
