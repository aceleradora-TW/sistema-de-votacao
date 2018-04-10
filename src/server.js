const express = require('express')
const projectRoutes = require('./routes/project')
const { join } = require('path')
const { winstonMiddleware } = require('./logger')

module.exports = () =>
  express()
    .use(winstonMiddleware)
    .use('/projects', projectRoutes)
    .use(express.static(join(__dirname, 'public')))
