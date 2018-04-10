const server = require('./src/server')
const { port, databaseUri } = require('./settings')
const { logger } = require('./src/logger')
const database = require('./src/database')

database(databaseUri).connect()

server()
  .listen(port, () => logger.info('Up on port', port))
