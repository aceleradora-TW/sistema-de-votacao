const cypress = require('cypress')
const server = require('./test-server')

server()
  .then((stopServer) =>
    cypress
      .run()
      .then(stopServer)
      .catch(error => console.log(error.message))
  )
  .catch(error => console.log(error.message))

