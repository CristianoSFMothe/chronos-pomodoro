import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { HomePage } from '../../pages/Home';
import { AboutPomodoroPage } from '../../pages/AboutPomodoro';
import { NotFoundPage } from '../../pages/NotFound';
import { useEffect } from 'react';
import { HistoryPage } from '../../pages/History';
import { SettingsPage } from '../../pages/Settings';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/history/' element={<HistoryPage />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoroPage />} />
        <Route path='/settings/' element={<SettingsPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
