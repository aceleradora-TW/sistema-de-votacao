// eslint-disable-next-line import/no-unresolved
const errorHandlerCreator = require('routes/error-handler')

describe('Error handler', () => {
  let logger
  let error
  let response
  let request

  beforeEach(() => {
    logger = { error: jest.fn() }
    error = new Error('fooMessage')
    response = { json: jest.fn(), status: jest.fn().mockReturnThis() }
    request = {}

    const errorHandler = errorHandlerCreator(logger)

    errorHandler(error, request, response)
  })

  it('logs the error object', () => {
    expect(logger.error).toBeCalledWith(error)
  })

  it('responds with status 500', () => {
    expect(response.status).toBeCalledWith(500)
  })

  it('responds with the error message in the response body', () => {
    expect(response.json).toBeCalledWith({ error: error.message })
  })
})
