import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

const App = () => {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        incidunt sapiente, nam maxime maiores est id placeat iure quaerat
        consequatur quasi esse quo voluptatem quibusdam assumenda ut enim magni
        eaque.
      </p>
    </>
  );
};

export { App };
