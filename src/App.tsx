import { TaskContextProvider } from './contexts/TasksContext/TaskContextProvider';
import { MessagesContainer } from './components/MessageContainer';
import { MainRouter } from './routes/MainRouter';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <div className='app-wrapper'>
      <TaskContextProvider>
        <MessagesContainer>
          <MainRouter />
        </MessagesContainer>
      </TaskContextProvider>
    </div>
  );
}
