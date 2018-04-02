const cypress = require('cypress')
const serverManager = require('./test-server-manager')

serverManager
  .start()
  .then((runningServer) => {
    cypress
      .run()
      .then(runningServer.stop)
  })
  .catch(error => console.log(error.message))

