import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultButton } from '../button';
import { Cyclos } from '../Cyclos';
import { DefaultIndex } from '../Input';
import type React from 'react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TasksModel';
import { useTasksContext } from '../../contexts/TasksContext/userTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formateSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTasksContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert('Digite uma tarefa');
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

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleInterruptTask = () => {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return {
              ...task,
              interruptedDate: Date.now(),
            };
          }

          return task;
        }),
      };
    });
  };

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultIndex
          id='formInput'
          type='text'
          labelText='Tarefa'
          title='Tarefa'
          name='taskName'
          data-testid='taskName'
          placeholder='Digite uma tarefa'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min.</p>
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
            data-testid='stopTaskButton'
            onClick={handleInterruptTask}
            key='button'
          />
        )}
      </div>
    </form>
  );
}
