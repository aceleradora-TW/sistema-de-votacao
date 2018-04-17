module.exports = project => (req, res, next) =>
  project.find({})
    .exec()
    .then(projects => res.json(projects))
    .catch(next)
