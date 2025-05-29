/// <reference types="cypress" />
import { toastElements } from '../../elements/components/toastElements';

Cypress.Commands.add('ToastMessageSuccess', message => {
  cy.get(toastElements.toastMessageSuccess)
    .should('be.visible')
    .and('have.text', message);
});

Cypress.Commands.add('ToastMessageWarning', message => {
  cy.get(toastElements.toastMessageWarning)
    .should('be.visible')
    .and('have.text', message);
});
