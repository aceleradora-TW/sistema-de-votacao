const { logger } = require('./../../logger')

module.exports = project => (req, res) => {
  project.find({})
    .exec()
    .then(projects => {
      res.send(JSON.stringify(projects))
    }).catch(err => {
      logger.error(err)
      res.status(500).send(err)
    })
}
