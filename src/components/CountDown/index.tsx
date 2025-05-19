import styles from './styles.module.css';
import { useTasksContext } from '../../contexts/TasksContext';

export function CountDown() {
  const { state } = useTasksContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
