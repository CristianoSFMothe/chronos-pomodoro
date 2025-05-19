import { HomePage } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TasksContext/TaskContextProvider';

export function App() {
  return (
    <div className='app-wrapper'>
      <TaskContextProvider>
        <HomePage />
      </TaskContextProvider>
    </div>
  );
}
