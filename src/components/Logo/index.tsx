import { TimerIcon } from 'lucide-react';
import './styles.css';

export const Logo = () => {
  return (
    <div className='logo'>
      <a className='logoLink' href='#'>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
};
