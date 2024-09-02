import homepage from "../pages/homePage"
import loginpage from "../pages/loginpage"


it('Simplilearn invalid login', () =>
{
    cy.once('uncaught:exception', () => false);
    cy.visit('/')
    homepage.clickOnSignIn();
    loginpage.login();
    loginpage.elements.errCheck().should('have.text', 'The email or password you have entered is invalid')
})