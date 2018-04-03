const express = require('express')
const { join } = require('path')
const logger = require('./logger')

module.exports = () =>
  express()
    .use(logger)
    .use(express.static(join(__dirname, "public")));