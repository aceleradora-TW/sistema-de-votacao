const cypress = require('cypress')
const server = require('./test-server')
const { logger } = require('./../src/logger')

server()
  .then(stopServer =>
    cypress
      .run()
      .then(stopServer)
      .catch(logger.error))
  .catch(logger.error)
