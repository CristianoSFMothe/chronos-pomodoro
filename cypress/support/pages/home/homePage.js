/// <reference types="cypress" />
import { homeElements } from '../../elements/homeElements';

Cypress.Commands.add('CreateNewTask', task => {
  cy.get(homeElements.inputTaskName)
    .should('be.visible')
    .click()
    .type(task)
    .should('have.value', task);

  cy.get(homeElements.startTaskButton)
    .should('be.visible')
    .find('svg')
    .should('have.class', homeElements.iconPlayer)
    .as('playButton');

  cy.get('@playButton').click();
});

Cypress.Commands.add('InterruptTasks', () => {
  cy.get(homeElements.stopTaskButton)
    .should('be.visible')
    .find('svg')
    .should('have.class', homeElements.iconStop)
    .as('stopButton');

  cy.tick(3000);

  cy.get(homeElements.stopTaskButton).click();
});
