// cypress/e2e/tasks.cy.js

describe('Tasks', () => {
  beforeEach(() => {
    // Ignora o erro específico de importScripts da Vite/Worker
    cy.on('uncaught:exception', err => {
      if (err.message.includes("Failed to execute 'importScripts'")) {
        return false; // Evita que o teste falheimport { TaskActionTypes } from './../../src/contexts/TasksContext/taskActions';
      }
    });

    cy.visit('/');
  });

  context('Initializing a task', () => {
    it('should initialize a task', () => {
      cy.OpenHomePage('Chronos', '00:00');

      cy.CreateNewTask('Estada DevOps');

      cy.ToastMessageSuccess('Tarefa iniciada');

      cy.validateInterruptedTaskButton();
    });

    it('should initialize a task', () => {
      cy.clock();

      cy.OpenHomePage('Chronos', '00:00');

      cy.CreateNewTask('Estada DevOps');

      cy.ToastMessageSuccess('Tarefa iniciada');

      cy.ValidateInterruptedTaskButton();

      cy.InterruptTasks();
    });

    it('should initialize a task, interrupt it, and initialize it again until long break', () => {
      const cycleSequence = [
        'workTime',
        'shortBreakTime',
        'workTime',
        'shortBreakTime',
        'workTime',
        'shortBreakTime',
        'workTime',
        'longBreakTime',
        'workTime',
      ];

      const cycleTextMap = {
        workTime: 'Foque por 25min',
        shortBreakTime: 'Descanse por 5min',
        longBreakTime: 'Descanso longo',
      };

      cy.clock();

      cy.createTaskInput('Teste');
      cy.assertNextCycleText('Próximo ciclo é de 25min');

      for (let index = 0; index < cycleSequence.length; index++) {
        const current = cycleSequence[index];

        cy.startTask();
        cy.assertNextCycleText(cycleTextMap[current]);
        cy.assertIconVisible(current);

        cy.get('._cyclesDots_1e87i_9')
          .children()
          .should('have.length.at.least', index + 1);

        if (current === 'longBreakTime') {
          break;
        }

        cy.interruptTask();
      }
    });
  });
});
