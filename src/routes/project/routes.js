const router = require('express').Router()
const listProjects = require('./list')
const Project = require('./../../models/project')

router.get('/', listProjects(Project))

module.exports = router
