describe('Navigation Test', () => {
  it('visits home and navigates to add book page', () => {
    cy.visit('http://localhost:5174/home')

    cy.contains('My Library').should('be.visible')

    cy.contains('Додати книгу').click()

    cy.url().should('include', '/add')

    cy.contains('Нова книга').should('be.visible')
  })
})