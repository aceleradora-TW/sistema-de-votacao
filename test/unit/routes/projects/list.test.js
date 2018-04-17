// eslint-disable-next-line import/no-unresolved
const listRouteCreator = require('routes/project/list')

describe('Get a list of projects', () => {
  let response
  let next
  let listRoute
  let Project
  let request

  beforeEach(() => {
    request = {}
    response = { json: jest.fn() }
    next = jest.fn()
    Project = { find: jest.fn().mockReturnThis(), exec: jest.fn() }

    listRoute = listRouteCreator(Project)
  })

  describe('when projects are successfully found in the database', () => {
    let projects

    beforeEach(() => {
      projects = [{ name: 'Batatinha 1' }]
      Project.exec.mockResolvedValue(projects)
    })

    it('responds successfully with a list of projects', done =>
      listRoute(request, response, next)
        .then(() => expect(response.json).toBeCalledWith(projects))
        .then(done)
        .catch(done))
  })

  describe('when there is a failure while searching in the database', () => {
    let error

    beforeEach(() => {
      error = new Error('Database Failure')
      Project.exec.mockRejectedValue(error)
    })

    it('sends the error to the error handler middleware via next()', done =>
      listRoute(request, response, next)
        .then(() =>
          expect(next).toBeCalledWith(error))
        .then(done)
        .catch(done))
  })
})
