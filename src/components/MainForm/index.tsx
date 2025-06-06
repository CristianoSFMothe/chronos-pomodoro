import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultButton } from '../button';
import { Cyclos } from '../Cyclos';
import { DefaultInput } from '../Input';
import type React from 'react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TasksModel';
import { useTasksContext } from '../../contexts/TasksContext/userTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TasksContext/taskActions';
import { Tips } from '../Tips';
import { showMessage } from '../../adapters/showMessage';

export function MainForm() {
  const { state, dispatch } = useTasksContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    showMessage.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      showMessage.warn('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Math.random().toString(36).substring(2, 9),
      name: taskName,
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    showMessage.success('Tarefa iniciada');
  };

  const handleInterruptTask = () => {
    showMessage.dismiss();
    showMessage.warn('Tarefa interrompida!');
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  };

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='formInput'
          type='text'
          labelText='Tarefa'
          title='Tarefa'
          name='taskName'
          data-testid='taskName'
          placeholder='Digite uma tarefa'
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className='formRow tipsWorks'>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cyclos />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            id='startTaskButton'
            icon={<PlayCircleIcon />}
            className='startTaskButton'
            data-testid='startTaskButton'
            key='submit'
          />
        )}
        {!!state.activeTask && (
          <DefaultButton
            aria-label='Interromper tarefa'
            title='Interromper tarefa'
            type='button'
            id='stopTaskButton'
            color='red'
            icon={<StopCircleIcon />}
            className='stopTaskButton'
            data-testid='stopTaskButton'
            onClick={handleInterruptTask}
            key='button'
          />
        )}
      </div>
    </form>
  );
}
