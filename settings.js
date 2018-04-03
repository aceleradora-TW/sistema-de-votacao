const port = process.env.PORT || 3000

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/votacao_aceleradora'

module.exports = {
  port,
  databaseUri,
}