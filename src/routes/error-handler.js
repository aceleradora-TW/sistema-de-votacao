module.exports = logger => (err, req, res, next) => {
  logger.error(err)
  res.status(500).send(err.message)
  next()
}
