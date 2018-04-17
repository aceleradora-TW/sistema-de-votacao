const projectListItem = n => cy.get('ul').children(n)

describe('Project List', () => {
  it('loads successfully', () => {
    cy.visit('/')
  })

  it('has a title', () => {
    cy.get('h1').should('contain', 'Projetos')
  })

  it('has "Projeto 01" in the list', () => {
    projectListItem(0).should('contain', 'Projeto 01')
  })

  it('has "Projeto 02" in the list', () => {
    projectListItem(1).should('contain', 'Projeto 02')
  })

  it('has "Projeto 03" in the list', () => {
    projectListItem(2).should('contain', 'Projeto 03')
  })
})
