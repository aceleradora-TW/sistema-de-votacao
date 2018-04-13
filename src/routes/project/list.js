module.exports = project => (req, res, next) =>
  project.find({})
    .exec()
    .then(projects => {
      res.send(JSON.stringify(projects))
    }).catch(err => {
      next(err)
    })
