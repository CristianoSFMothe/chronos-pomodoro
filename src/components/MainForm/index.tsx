import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../button';
import { Cyclos } from '../Cyclos';
import { DefaultIndex } from '../Input';
import type { HomePageProps } from '../../pages/Home';

export function MainForm({ state }: HomePageProps) {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultIndex
          id='formInput'
          type='text'
          labelText='Tarefa'
          placeholder='Digite uma tarefa'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de {state.config.workTime}min.</p>
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
