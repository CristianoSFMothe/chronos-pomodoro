import { homeElements } from '../support/elements/homeElements';
import { toastElements } from '../support/elements/components/toastElements';

describe('Tasks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Initializing a task', () => {
    it('should successfully initialize a task', () => {
      cy.openHomePage('Chronos', '00:00');

      cy.createFocusedTask();

      cy.toastMessageSuccess('Tarefa iniciada');

      cy.validateInterruptedTaskButton();

      cy.workTime('00:00');
    });
  });
});
