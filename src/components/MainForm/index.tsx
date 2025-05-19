import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../button';
import { Cyclos } from '../Cyclos';
import { DefaultIndex } from '../Input';
import type React from 'react';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('criar nova tarefa');
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
          value={taskName}
          onChange={event => setTaskName(event.target.value)}
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
