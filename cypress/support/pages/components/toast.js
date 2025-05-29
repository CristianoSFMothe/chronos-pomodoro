/// <reference types="cypress" />
import { toastElements } from '../../elements/components/toastElements';

Cypress.Commands.add('ToastMessageSuccess', message => {
  cy.get(toastElements.toastMessage)
    .should('be.visible')
    .and('have.text', message);
});
