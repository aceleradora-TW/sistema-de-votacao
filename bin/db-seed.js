const database = require('../src/database')
const settings = require('../settings')
const { logger } = require('../src/logger')
const Project = require('../src/models/project')

const db = database(settings.databaseUri)

const CLEANUP = 'Cleaning up Project documents...'
const INSERT = 'Inserting new Project documents...'
const DONE = 'All done!'
const DISCONNECT = 'Disconnecting from the DB...'
const START = 'Connected to the DB. Seeding will now start.'

const logAndThen = (message, action = () => {}) => () => {
  logger.info(message)
  action()
}

db
  .connect()
  .then(logAndThen(START))
  .then(logAndThen(CLEANUP, () => Project.remove({}).exec()))
  .then(logAndThen(INSERT, () => Project.collection.insert([
    { name: 'Projeto 01' },
    { name: 'Projeto 02' },
    { name: 'Projeto 03' }])))
  .then(logAndThen(DISCONNECT, db.disconnect))
  .then(logAndThen(DONE))
  .catch(logger.error)
