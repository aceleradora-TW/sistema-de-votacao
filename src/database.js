const mongoose = require('mongoose')

module.exports = {
  connect: () => mongoose.connect('mongodb://127.0.0.1/doot'),

  disconnect: () => new Promise((resolve, reject) =>
    mongoose.connection.close((error) => error
      ? reject(error)
      : resolve()))
}
