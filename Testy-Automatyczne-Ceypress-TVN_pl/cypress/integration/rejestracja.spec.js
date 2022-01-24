
describe('Rejestracja nowego użytkownikana na zarejestrowany wcześniej e-mail', () => {
    it('Nie powinien zostać zarejestrowany użytkownik na na istniejący e-mail w bazie',() => {
cy.visit('/')

cy.get('#onetrust-accept-btn-handler').click()
cy.get('#userBar').click()
cy.get('.global-header__inner')
        .should('be.visible')
        .and('contain.text','KONTO')
cy.get('#register').click()
cy.get('.main-layout__content--inner')
        .should('be.visible')
        .and('contain.text','Zarejestruj się e-maile')
cy.get('#register_by_email').click()
cy.get('.step-page')
        .should('be.visible')
        .and('contain.text','Zarejestruj')
cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env("nazwa"))
cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env("username"))
cy.get('#password').type(Cypress.env("password"))
cy.get('#register-switch-group-item-1-0 > .app-switch-thumb-wrapper > .app-switch-thumb').click()
cy.get('#create_account').click()
cy.get('#client-snackbar')
        .should('be.visible')
        .and('contain.text','Istnieje już konto TVN powiązane z tym adresem e-mail')
    });
});