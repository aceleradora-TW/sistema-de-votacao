const morgan = require('morgan');
const { join } = require('path');
const fs = require('fs');

const loggerStream = fs.createWriteStream(join(__dirname, 'logs', 'access.log'), { flags: 'a+' });

module.exports = () =>
  morgan('combined', { stream: loggerStream });
