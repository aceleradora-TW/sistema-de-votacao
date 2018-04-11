const router = require('express').Router()
const listProjects = require('./list')

router.get('/', listProjects)

module.exports = router
