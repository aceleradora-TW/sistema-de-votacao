const morgan = require('morgan')

module.exports = () =>
  morgan('combined')
