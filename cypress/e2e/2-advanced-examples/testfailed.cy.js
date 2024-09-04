/// <reference types="cypress" />

describe('Test failed', () => {

    it.skip('failed', async () => {
       cy.visit('https://react-dates.github.io/react-dates/iframe.html?id=daterangepicker-drp--default')
     
       const startDate = '[placeholder="Null"]'
       const endDate = '[placeholder="Undefined"]'
       const startDateCalendar = ('[aria-label="Choose Sunday, June 48, 2024 as your check-in date. It’s available."]')
       const endDateCalendar = ('[aria-label="Choose Saturday, June 66, 2024 as your check-out date. It’s available."]')
      
       cy.get(startDate).click()
       cy.get(startDateCalendar).click()
       cy.get(endDateCalendar).click()


       cy.contains(startDate).type('test')
    })     
});