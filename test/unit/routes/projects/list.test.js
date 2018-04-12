// Injetar uma response com uma função mocked e ver se ela foi chamada!
// eslint-disable-next-line import/no-unresolved
const Project = require('models/project')
// eslint-disable-next-line import/no-unresolved
const listRoute = require('routes/project/list')
const mockingoose = require('mockingoose').default

describe('Get list of projects', () => {
  describe('when things goes right', () => {
    it('should call response.send with projects as json', async () => {
      const request = {}
      const response = { send: jest.fn() }
      const projects = [{ name: 'Batatinha 1' }]


      mockingoose.Project.toReturn(projects, 'find')
      listRoute(Project)(request, response).then(() => {
        expect(response.send.mock.calls.length).toBe(1)
        expect(response.send.mock.calls[0][0].map(project => project.name)).toEqual(JSON.stringify(projects))
      })
    })
  })
})
