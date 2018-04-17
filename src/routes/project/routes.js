const express = require('express')
const listProjects = require('./list')
const Project = require('./../../models/project')

const router = express.Router()

router.get('/', listProjects(Project))

module.exports = router
