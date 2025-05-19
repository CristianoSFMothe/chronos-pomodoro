import type { HomePageProps } from '../../pages/Home';
import styles from './styles.module.css';

export function CountDown({ state }: HomePageProps) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
