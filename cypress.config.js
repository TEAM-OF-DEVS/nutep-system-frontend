import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adicione eventos de configuração aqui, se necessário
    },
    baseUrl: "http://localhost:5173", // Substitua pela URL base do seu projeto
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Local dos testes
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
