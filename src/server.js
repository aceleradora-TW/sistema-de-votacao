const express = require('express')
const {join} = require('path')

module.exports = () =>
  express()
    .use(express.static(join(__dirname, 'public')))