/// <reference types="cypress" />
import { homeElements } from './elements/homeElements';

Cypress.Commands.add('OpenHomePage', (title, workTime) => {
  cy.contains('span', title).should('be.visible');

  cy.get(homeElements.workTime).should('have.text', workTime);
});

Cypress.Commands.add('ValidateInterruptedTaskButton', () => {
  cy.get(homeElements.stopTaskButton)
    .should('be.visible')
    .find('svg')
    .should('have.class', homeElements.iconStop);
});

Cypress.Commands.add('validateStartTaskButton', () => {
  cy.get(homeElements.startTaskButton)
    .should('be.visible')
    .find('svg')
    .should('have.class', homeElements.iconPlayer);
});

Cypress.Commands.add('workTime', time => {
  cy.get(homeElements.workTime).should($el => {
    expect($el.text()).not.to.eq(time);
  });
});

Cypress.Commands.add('assertNextCycleText', text => {
  cy.get(homeElements.tipsWorks).should('contain.text', text);
});

Cypress.Commands.add('createTaskInput', task => {
  cy.get(homeElements.inputTaskName)
    .should('be.visible')
    .type(task)
    .should('have.value', task);
});

Cypress.Commands.add('startTask', () => {
  cy.get(homeElements.startTaskButton).should('be.visible').click();
});

Cypress.Commands.add('interruptTask', () => {
  cy.tick(3000);
  cy.get(homeElements.stopTaskButton).should('be.visible').click();
});

Cypress.Commands.add('assertIconVisible', iconId => {
  cy.get(`#${iconId}`).should('be.visible');
});
