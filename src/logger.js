const winston = require("winston")
const expressWinston = require("express-winston")

module.exports =
  expressWinston.logger({
    transports: [
      new winston.transports.Console({
        colorize: true,
      }),
    ],
    expressFormat: true,
    colorize: true,
  })