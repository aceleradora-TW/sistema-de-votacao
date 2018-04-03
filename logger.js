const morgan = require('morgan');
const { join } = require('path');
const rfs = require('rotating-file-stream');

const loggerStream = rfs('access.log', {
  interval: '1d',
  path: join(__dirname, 'logs'),
});

module.exports = () =>
  morgan.use('combined', {
    stream: loggerStream,
  });
