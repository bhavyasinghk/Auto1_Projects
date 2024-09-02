class loginpage{

    elements = {
        userName: () => cy.get(".email"),
        pwd: () => cy.get("#password"),
        loginBtn: () => cy.xpath("//input[@title='Login']"),
        errCheck : () => cy.get("#msg_box")
    }

    login()
    {
        this.elements.userName().type("xyz@gmail.com");
        this.elements.pwd().type("XYZ#1234354");
        this.elements.loginBtn().click;
    }

}