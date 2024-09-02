describe('Validating Search Text Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('https://www.simplilearn.com/')
    
    cy.get('.container > [href="https://www.simplilearn.com/resources"]').should('contain','Resources')
    cy.get('#header_srch').type('Selenium')
    cy.screenshot()
    cy.get('.search_icon').click()
    cy.get('.search-cat-info > h4').should('contain','Automation Testing Masters Program')
    
      })
})
