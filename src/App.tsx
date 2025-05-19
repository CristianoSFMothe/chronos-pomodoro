import { TaskContextProvider } from './contexts/TasksContext';
import { HomePage } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <div className='app-wrapper'>
      <TaskContextProvider>
        <HomePage />
      </TaskContextProvider>
    </div>
  );
}
