const mongoose = require('mongoose')

module.exports = (databaseUri) => ({
  connect: () => mongoose.connect(databaseUri),

  disconnect: () => new Promise((resolve, reject) =>
    mongoose.connection.close((error) => error
      ? reject(error)
      : resolve()))
})