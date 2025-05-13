import Container from './components/Container';
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { Logo } from './components/Logo';

const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
};

export { App };
