const { defineConfig } = require("cypress");

  module.exports = defineConfig({
    e2e: {
      baseUrl: "http://localhost:3000/",
      setupNodeEvents(on, config) {
      },
      viewportWidth: 1536,
      viewportHeight: 960,
    },
  });