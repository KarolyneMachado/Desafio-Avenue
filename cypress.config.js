const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.openweathermap.org', // Configure sua URL base aqui
    setupNodeEvents(on, config) {
      // Código de configuração adicional
    },
  },
});