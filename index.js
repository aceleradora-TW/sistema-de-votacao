const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log('Up on port', PORT))
