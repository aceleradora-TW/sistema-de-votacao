const router = require('express').Router()
const Project = require('./../models/project')
const { logger } = require('./../logger')

router.get('/', (req, res) => {
  Project.find({})
    .exec()
    .then(projects => {
      res.send(JSON.stringify(projects))
    }).catch(err => {
      logger.error(err)
      res.status(500).send(err)
    })
})

module.exports = router
