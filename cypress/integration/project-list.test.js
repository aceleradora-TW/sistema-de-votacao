describe('Project List', () => {
  it('loads successfully', () => {
    cy.visit('/')
  })

  it('has a title', () => {
    cy.get('h1').should('contain', 'Projetos')
  })

  it('has the hardcoded project', () => {
    cy.get('ul > li:first').should('contain', 'Projeto 01')
  })
})
