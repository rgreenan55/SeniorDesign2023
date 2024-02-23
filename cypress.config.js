const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    home_url: 'http://localhost:3000/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
