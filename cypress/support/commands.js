Cypress.Commands.add('scrollFromField', (selector) => {
    cy.get(selector).scrollIntoView(); // Faz scroll até o campo específico
});