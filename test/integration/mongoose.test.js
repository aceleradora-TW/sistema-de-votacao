const mongoose = require('mongoose')
const database = require('../../src/database')
const { databaseUri } = require('../../settings')

const CONNECTED = 1
const DISCONNECTED = 0

describe('mongoose', () => {
  const expectSuccesfulConnection = connection => {
    expect(connection.connections.length).toEqual(1)
    // eslint-disable-next-line no-underscore-dangle
    expect(connection.connections[0]._readyState).toEqual(CONNECTED)
  }

  const expectConnectionToBeClosed = () => {
    // eslint-disable-next-line no-underscore-dangle
    expect(mongoose.connection._readyState).toEqual(DISCONNECTED)
  }

  it('can create a single connection', done => {
    database(databaseUri)
      .connect()
      .then(expectSuccesfulConnection)
      .then(done)
      .catch(done)
  })

  it('can close the previously opened connection', done => {
    database(databaseUri)
      .disconnect()
      .then(expectConnectionToBeClosed)
      .then(done)
      .catch(done)
  })
})
