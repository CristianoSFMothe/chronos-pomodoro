/// <reference types="cypress" />
import { homeElements } from './elements/homeElements';
import { toastElements } from './elements/components/toastElements';

Cypress.Commands.add('openHomePage', (title, workTime) => {
  cy.contains('span', title).should('be.visible');

  cy.get(homeElements.workTime).should('have.text', workTime);
});

Cypress.Commands.add('createFocusedTask', () => {
  cy.get(homeElements.inputTaskName)
    .should('be.visible')
    .click()
    .type('Teste')
    .should('have.value', 'Teste');

  cy.get(homeElements.startTaskButton)
    .should('be.visible')
    .find('svg')
    .should('have.class', homeElements.iconPlayer)
    .as('playButton');

  cy.get('@playButton').click();
});

Cypress.Commands.add('toastMessageSuccess', message => {
  cy.get(toastElements.toastMessage)
    .should('be.visible')
    .and('have.text', message);
});

Cypress.Commands.add('validateInterruptedTaskButton', () => {
  cy.get(homeElements.stopTaskButton)
    .should('be.visible')
    .find('svg')
    .should('have.class', homeElements.iconStop);
});

Cypress.Commands.add('workTime', time => {
  cy.get(homeElements.workTime).should($el => {
    expect($el.text()).not.to.eq(time);
  });
});
