const express = require('express');
const logger = require('./logger');
const { join } = require('path');

module.exports = () =>
  express()
    .use(logger)
    .use(express.static(join(__dirname, 'public')));
