const mongoose = require('mongoose')

module.exports = mongoose.model('Projects', {
  name: String
})