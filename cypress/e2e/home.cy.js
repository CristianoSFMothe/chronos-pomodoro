describe('Tasks', () => {
  context('Initializing a task', () => {
    it('should successfully initialize a task', () => {
      cy.visit('/');

      cy.contains('span', 'Chronos').should('be.visible');

      cy.get('[data-testid="workTime"]').should('have.text', '00:00');

      cy.get('[data-testid="taskName"]')
        .should('be.visible')
        .click()
        .type('Teste')
        .should('have.value', 'Teste');

      cy.get('[data-testid="startTaskButton"]')
        .should('be.visible')
        .find('svg')
        .should('have.class', 'lucide-circle-play')
        .as('playButton');

      cy.get('@playButton').click();

      cy.get('.Toastify__toast--success')
        .should('be.visible')
        .and('have.text', 'Tarefa iniciada');

      cy.get('[data-testid="stopTaskButton"]')
        .should('be.visible')
        .find('svg')
        .should('have.class', 'lucide-circle-stop');

      cy.get('[data-testid="workTime"]').should($el => {
        expect($el.text()).not.to.eq('00:00');
      });
    });
  });
});
