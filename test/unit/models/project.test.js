// eslint-disable-next-line import/no-unresolved
const Project = require('models/project')

describe('A project model', () => {
  it('is called Project', () => {
    expect(Project.modelName).toEqual('Project')
  })

  it('has an attribute of type String called "name"', () => {
    expect(Project.schema.paths.name).toBeTruthy()
    expect(Project.schema.paths.name.instance).toEqual('String')
  })
})
