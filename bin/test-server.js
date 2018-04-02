const regularServer = require('../server')

const stop = (server) => () => {
  server.close()
  console.log('Test server stopped')
}

const start = () => new Promise((resolve, reject) => {
  const server = regularServer().listen(3000, () => {
    console.log('Test server started at ', 3000)

    return resolve(stop(server))
  })
})

module.exports = start
