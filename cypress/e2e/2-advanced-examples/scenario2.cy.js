/// <reference types="cypress" />

describe('Testing results',{ defaultCommandTimeout: 10000 }, () => {

    it('scenario2', () => {
       cy.visit('https://cloud.cypress.io/projects/x7ax4e/runs/9/overview?roarHideRunsWithDiffGroupsAndTags=1')
       cy.get('button.btn.btn-login.btn-provider.btn-provider-email.btn-block').click()
       cy.get('#email').type('forcypress@rambler.ru')
       cy.get('input[type="password"]').type('Cypresstest2024')
       cy.get('button.btn.btn-primary').click()
       cy.get('div[data-cy="run-tab-errors"]').click()
    })     
});