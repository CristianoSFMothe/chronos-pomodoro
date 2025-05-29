/// <reference types="cypress" />
import { click, get_text, set, waitElement } from '../../actions';
import { toastElements } from '../../elements/components/toastElements';
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

  cy.ToastMessageWarning('Tarefa interrompida!');
});

Cypress.Commands.add('EmptyFieldTaskName', message => {
  waitElement(homeElements.inputTaskName);
  set(homeElements.inputTaskName, null);
  click(homeElements.startTaskButton);
  get_text(toastElements.toastMessageWarning, message);
});
