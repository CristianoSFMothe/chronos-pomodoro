import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const handleThemeChange = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={`${styles.menuLink} buttonHome`}
        data-testid='buttonHome'
        to='/'
        aria-label='Ir para a página inicial'
        title='Página Inicial'
      >
        <HouseIcon />
      </Link>

      <Link
        className={`${styles.menuLink} buttonHistory`}
        data-testid='buttonHistory'
        to='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </Link>

      <Link
        className={`${styles.menuLink} buttonSettings`}
        data-testid='buttonSettings'
        to='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </Link>

      <Link
        className={`${styles.menuLink} buttonChangeTheme`}
        data-testid='buttonChangeTheme'
        to='#'
        aria-label='Alterar Tema'
        title='Alterar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </Link>
    </nav>
  );
}
