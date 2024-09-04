/// <reference types="cypress" />

describe('Test passed', { defaultCommandTimeout: 10000 }, () => {

    it.skip('passed', async () => {
       cy.visit('https://react-dates.github.io/react-dates/iframe.html?id=daterangepicker-drp--default')
     
       const startDate = '[placeholder="Start Date"]'
       const endDate = '[placeholder="End Date"]'
       const startDateCalendar = ('[aria-label="Choose Sunday, June 23, 2024 as your check-in date. It’s available."]')
       const endDateCalendar = ('[aria-label="Choose Saturday, June 29, 2024 as your check-out date. It’s available."]')
      
       cy.get(startDate).click()
       cy.get(startDateCalendar).click()
       cy.get(endDateCalendar).click()
    })     
});