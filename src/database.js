const mongoose = require('mongoose')

module.exports = {
  connect: () => mongoose.connect(process.env.MONGODB_URI),

  disconnect: () => new Promise((resolve, reject) =>
    mongoose.connection.close((error) => error
      ? reject(error)
      : resolve()))
}
