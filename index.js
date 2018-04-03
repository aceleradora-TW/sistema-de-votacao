const express = require('express');
const server = require('./server');
const logger = require('./logger');

const PORT = process.env.PORT || (3000);

express()
  .use(logger);

server()
  .listen(PORT, () => console.log('Up on port', PORT));
