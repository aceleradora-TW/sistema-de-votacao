const winston = require('winston')
const expressWinston = require('express-winston')

const loggerOptions = {
  transports: [
    new winston.transports.Console({
      colorize: true,
    }),
  ],
  expressFormat: true,
  colorize: true,
}

const logger = new winston.Logger(loggerOptions)
const winstonMiddleware = expressWinston.logger(loggerOptions)

module.exports = {
  logger,
  winstonMiddleware,
}
