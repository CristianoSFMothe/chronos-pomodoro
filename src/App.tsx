import { Logo } from './components/Logo';
import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Container } from './components/Container';
import { DefaultIndex } from './components/Input';
import { Cyclos } from './components/Cyclos';

export function App() {
  return (
    <div className='app-wrapper'>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
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
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
