const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = {
  // ...rest of the Cypress project config
  projectId: "x7ax4e",

  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
      // implement node event listeners here
    },
  },
};