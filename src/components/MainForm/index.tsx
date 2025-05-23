import { PlayCircleIcon } from 'lucide-react';
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

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultIndex
          id='formInput'
          type='text'
          labelText='Tarefa'
          title='Tarefa'
          placeholder='Digite uma tarefa'
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min.</p>
      </div>

      <div className='formRow'>
        <Cyclos />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
