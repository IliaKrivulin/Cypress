/// <reference types="cypress" />

describe('Testing results',{ defaultCommandTimeout: 10000 }, () => {

    it('scenario4', () => {
       cy.visit('https://cloud.cypress.io/login/email')
  
       cy.get('#email').type('forcypress@rambler.ru')
       cy.get('input[type="password"]').type('Cypresstest2024')
       cy.get('button.btn.btn-primary').click()
       cy.get('button.link-card.organization-selection-option.btn.btn-lg.btn-default:nth-of-type(2)').click()
       cy.wait(1000)
       cy.get('[data-cy="branch-row"]').click()
       cy.get('div.ellipsis > i.fa.fa-check-circle').click()
    })     
});