import { useTasksContext } from '../../contexts/TasksContext/userTaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const { state } = useTasksContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
