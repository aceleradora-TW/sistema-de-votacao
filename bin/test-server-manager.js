const server = require('../server')

const serverStopper = (runningServer) => ({
  stop: () => {
    runningServer.close()
    console.log('Test server stopped')
  }
})

const serverStarter = {
  start: () => new Promise((resolve, reject) => {
    const runningServer = server().listen(3000, () => {
      console.log('Test server started at ', 3000)

      return resolve(serverStopper(runningServer))
    })
  })
}

module.exports = serverStarter