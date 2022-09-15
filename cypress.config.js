const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4htcua',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://qamid.tmweb.ru'
  },
});