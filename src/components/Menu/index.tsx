import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import './styles.css';

export const Menu = () => {
  return (
    <nav className='menu'>
      <a className='menuLink house' href='#'>
        <HouseIcon />
      </a>
      <a className='menuLink history' href='#'>
        <HistoryIcon />
      </a>
      <a className='menuLink settings' href='#'>
        <SettingsIcon />
      </a>
      <a className='menuLink theme' href='#'>
        <SunIcon />
      </a>
    </nav>
  );
};
