
describe('Rejestracja na błędnie wpisany adres e-mail', () => {

    it('Powinien zostać wyświetlony komunikat o błędnym adresie e-mail ',() => {

        

    cy.visit('https://account.tvn.pl/auth/register/form?redirect_uri=https%3A%2F%2Fwww.tvn.pl%2Fauthenticate%3FredirectUrl%3Dhttps%253A%252F%252Fwww.tvn.pl%252F&client_id=Web_TVN20_6a84f00664ab0115&response_type=code&scope=%2Fpub-api%2Fuser%2Fme&state=69b674ed188064608c938b08706f1e14b5bdd34103fd9cd12b2d63d2d9c73929f8717462a3709b7a9a058a144e11a5061579eca9ae28e278f565e38d7c3a330d&service_id=174&version=2.2.0&config_hash=ea8c495a-2c61-4f26-81b9-1c92458ff5b4&open_view=login&action=login&oauth_params_hash=ecc390dcd85b4fbd2c73ba0644b360a4')
    cy.fixture("testdata").then(function(testdata) {
        this.testdata=testdata

        cy.get("[name='firstName']").type(this.testdata.username)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(this.testdata.email)
        cy.get('#password').type(this.testdata.password)
        cy.get('.MuiFormHelperText-root > ul > li')
        .should('be.visible')
        .and('contain.text','Podaj prawidłowy adres e-mail')
    })

    });
});
    
