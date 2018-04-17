const cypress = require('cypress')
const settings = require('../settings')
const database = require('../src/database')
const server = require('./test-server')
const { logger } = require('./../src/logger')

const db = database(settings.databaseUri)

db
  .connect()
  .then(server)
  .then(stopServer =>
    cypress
      .run()
      .then(db.disconnect)
      .then(stopServer)
      .catch(logger.error))
  .catch(logger.error)
