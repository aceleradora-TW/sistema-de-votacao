const morgan = require('morgan');
const { join } = require('path');
const fs = require('fs');

const logsDirectory = join(__dirname, 'logs');

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

const loggerStream = fs.createWriteStream(join(logsDirectory, 'access.log'), { flags: 'a+' });

module.exports = () =>
  morgan('combined', { stream: loggerStream });
