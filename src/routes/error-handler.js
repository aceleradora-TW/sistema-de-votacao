// eslint-disable-next-line
module.exports = logger => (err, req, res, next) => {
  logger.error(err)
  res.status(500).json({ error: err.message })
}
