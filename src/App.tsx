import { HomePage } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TasksContext/TaskContextProvider';
import { MessagesContainer } from './components/MessageContainer';

export function App() {
  return (
    <div className='app-wrapper'>
      <TaskContextProvider>
        <MessagesContainer>
          <HomePage />
        </MessagesContainer>
      </TaskContextProvider>
    </div>
  );
}
