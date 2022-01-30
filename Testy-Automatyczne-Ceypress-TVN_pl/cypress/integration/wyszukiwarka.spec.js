/// <reference types="cypress"/>

describe('Sprawdzenie wyników wyszukań', () => {

    before(() => {

        cy.visit('/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#top-action-search').click()
    })

    it('Powinny zostać wyświetlone materiały dotyczące szukanej frazy',() => {
        cy.get('.search-form').type('Szkło kontaktowe')
        cy.get('.search-form-submit').click()
        
        cy.get('.search-phrase').then((headerText) => {
         const text = headerText.text()
                  cy.writeFile('cypress/fixtures/wyniki.json', {wynik1:text})
        }) 
    });
    
    
});