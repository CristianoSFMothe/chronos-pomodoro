import { homeElements } from '../support/elements/homeElements';
import { toastElements } from '../support/elements/components/toastElements';

describe('Tasks', () => {
  context('Initializing a task', () => {
    it('should successfully initialize a task', () => {
      cy.visit('/');

      cy.contains('span', 'Chronos').should('be.visible');

      cy.get(homeElements.workTime).should('have.text', '00:00');

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

      cy.get(toastElements.toastMessage)
        .should('be.visible')
        .and('have.text', 'Tarefa iniciada');

      cy.get(homeElements.stopTaskButton)
        .should('be.visible')
        .find('svg')
        .should('have.class', homeElements.iconStop);

      cy.get(homeElements.workTime).should($el => {
        expect($el.text()).not.to.eq('00:00');
      });
    });
  });
});
