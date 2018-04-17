const database = require('../src/database')
const settings = require('../settings')
const { logger } = require('../src/logger')
const Project = require('../src/models/project')

const db = database(settings.databaseUri)

db
  .connect()
  .then(() =>
    Project.collection.insert([
      { name: 'Projeto 01' },
      { name: 'Projeto 02' },
      { name: 'Projeto 03' },
    ]))
  .then(db.disconnect)
  .catch(logger.error)
