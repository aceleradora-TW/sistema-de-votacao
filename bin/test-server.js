const regularServer = require('../src/server')
const { logger } = require('./../src/logger')

const stop = (server) => () => {
  server.close()
  logger.info('Test server stopped')
}

const start = () => new Promise((resolve, reject) => {
  const server = regularServer().listen(3000, () => {
    logger.info("Test server started at ", 3000)

    return resolve(stop(server))
  })
})

module.exports = start
