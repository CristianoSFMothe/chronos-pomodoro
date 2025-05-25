import { useTasksContext } from '../../contexts/TasksContext/userTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cyclos() {
  const { state } = useTasksContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescription = {
    workTime: 'Tempo de trabalho',
    shortBreakTime: 'Intervalo curto',
    longBreakTime: 'Intervalo longo',
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cyclesDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);

          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de clico de: ${cycleDescription[nextCycleType]}`}
              title={`Indicador de clico de: ${cycleDescription[nextCycleType]}`}
              id={nextCycleType}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
