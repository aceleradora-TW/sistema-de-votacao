const server = require('./src/server')
const { port } = require('./settings')
const { logger } = require('./src/logger')

server()
  .listen(port, () => logger.info('Up on port', port))
