// eslint-disable-next-line import/no-unresolved
const errorHandler = require('routes/error-handler')

describe('Error handler', () => {
  const logger = { error: jest.fn() }
  const err = new Error('fooMessage')
  const response = { send: jest.fn(), status: jest.fn().mockReturnThis() }

  test('should log the error and send 500 with the error message', () => {
    errorHandler(logger)(err, {}, response, jest.fn)

    expect(logger.error.mock.calls.length).toBe(1)
    expect(logger.error.mock.calls[0][0]).toBe(err)
    expect(response.send.mock.calls.length).toBe(1)
    expect(response.send.mock.calls[0][0]).toBe(err.message)
    expect(response.status.mock.calls.length).toBe(1)
    expect(response.status.mock.calls[0][0]).toBe(500)
  })
})
