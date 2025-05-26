import { HomePage } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TasksContext/TaskContextProvider';
import { MessagesContainer } from './components/MessageContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFoundPage } from './pages/NotFound/index';
import { AboutPomodoroPage } from './pages/AboutPomodoro';

export function App() {
  return (
    <div className='app-wrapper'>
      <TaskContextProvider>
        <MessagesContainer>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about-pomodoro' element={<AboutPomodoroPage />} />

              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </MessagesContainer>
      </TaskContextProvider>
    </div>
  );
}
