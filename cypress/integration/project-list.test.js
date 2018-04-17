const projectAtPosition = n => cy.get('ul').children(n)

describe('Project List', () => {
  it('loads successfully', () => {
    cy.visit('/')
  })

  it('has a title', () => {
    cy.get('h1').should('contain', 'Projetos')
  })

  it('has the project "Projeto 01"', () => {
    projectAtPosition(0).should('contain', 'Projeto 01')
  })

  it('has the project "Projeto 02"', () => {
    projectAtPosition(1).should('contain', 'Projeto 02')
  })

  it('has the project "Projeto 03"', () => {
    projectAtPosition(2).should('contain', 'Projeto 03')
  })
})
