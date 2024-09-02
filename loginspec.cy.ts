describe('Validating Login Page Test', () => {
    it('Visits the Login project page', () => {
      cy.visit('/')
      //test
      cy.once('uncaught:exception',() => false)  
      cy.get('.login').click()
      cy.get('.content-heading').should('contain','Welcome back!')  
      cy.get('.email').type('bhavya@gmail.com')
      cy.get('#password').type('Welcome#123')
      cy.get('#login-form > :nth-child(7) > .btn').click()
        
      cy.get('#msg_box').should('contain','The email or password you have entered is invalid')
     
    })
   
})