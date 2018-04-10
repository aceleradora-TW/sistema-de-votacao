describe('Project List', () => {
  it('loads successfully', () => {
    cy.visit('/')
  })

  it('has a title', () => {
    cy.get('h1').should('contain', 'Projetos')
  })
})
