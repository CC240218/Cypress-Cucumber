require('dotenv').config();
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      // implement node event listeners here
      on(
        "file:preprocessor",
        createBundler({ 
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      return config;
    },
    env: {
      USERNAME: process.env.NAME,
      PASSWORD: process.env.PASSWORD
    },
  },
});
