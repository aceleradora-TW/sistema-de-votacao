const server = require('./src/server')
const {port} = require('./settings')

server()
  .listen(port, () => console.log('Up on port', port))
