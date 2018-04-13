const express = require('express')
const projectRoutes = require('./routes/project/routes')
const errorHandler = require('./routes/error-handler')
const { join } = require('path')
const { winstonMiddleware, logger } = require('./logger')

module.exports = () =>
  express()
    .use(winstonMiddleware)
    .use('/projects', projectRoutes)
    .use(errorHandler(logger))
    .use(express.static(join(__dirname, 'public')))
