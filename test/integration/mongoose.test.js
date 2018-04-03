const mongoose = require('mongoose')
const database = require('../../src/database')

const CONNECTED = 1
const DISCONNECTED = 0

describe('mongoose', () => {

  const expectSuccesfulConnection = (connection) => {
    expect(connection.connections.length).toEqual(1)
    expect(connection.connections[0]._readyState).toEqual(CONNECTED)
  }

  const expectConnectionToBeClosed = (connection) => {
    expect(mongoose.connection._readyState).toEqual(DISCONNECTED)
  }

  it('can create a single connection', (done) => {
    database
      .connect()
      .then(expectSuccesfulConnection)
      .then(done)
      .catch(done)
  })

  it('can close the previously opened connection', (done) => {
    database
      .disconnect()
      .then(expectConnectionToBeClosed)
      .then(done)
      .catch(done)
  })

})
