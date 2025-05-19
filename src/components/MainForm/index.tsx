import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../button';
import { Cyclos } from '../Cyclos';
import { DefaultIndex } from '../Input';

export function MainForm() {
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
        <p>Lorem ipsum dolor sit amet.</p>
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
