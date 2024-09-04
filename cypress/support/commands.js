// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress");


/*
Cypress.Commands.add('login',(username='admin', password='admin') => {
    cy.get('#email').type('forcypress@rambler.ru')
    cy.get('input[type="password"]').type('Cypresstest2024')
    cy.get('button.btn.btn-primary').click()
    cy.contains('locator', 'invalid').should('be.visible')
    
})
    */