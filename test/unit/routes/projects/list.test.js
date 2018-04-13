// Injetar uma response com uma função mocked e ver se ela foi chamada!
// eslint-disable-next-line import/no-unresolved
const Project = require('models/project')
// eslint-disable-next-line import/no-unresolved
const listRoute = require('routes/project/list')
const mockingoose = require('mockingoose').default

describe('Get list of projects', () => {
  const response = { send: jest.fn() }
  const next = jest.fn()
  const projects = [{ name: 'Batatinha 1' }]
  const projectNames = responseCall => responseCall.map(proj => proj.name)

  describe('when things goes right', () => {
    test('should call response.send with projects as json', () => {
      mockingoose.Project.toReturn(projects, 'find').reset('find')
      return listRoute(Project)({}, response, next).then(() => {
        expect(response.send.mock.calls.length).toBe(1)
        expect(projectNames(response.send.mock.calls[0][0])).toEqual(JSON.stringify(projects))
      }).catch(() => {})
    })
  })

  describe('when things goes wrong', () => {
    test('should call response with code 500', () => {
      mockingoose.Project.toReturn(new Error('err'), 'find')
      return listRoute(Project)({}, response, next).catch(() => {
        expect(next.mock.calls.length).toBe(1)
      })
    })
  })
})
