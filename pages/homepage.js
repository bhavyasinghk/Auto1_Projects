class homepage{

    elements = {
    loginBtn : () => cy.get(".login"),
}

clickOnSignIn()
{
    this.elements.loginBtn().click()
}
}