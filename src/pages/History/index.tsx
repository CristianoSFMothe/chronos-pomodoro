import { useEffect, useState } from 'react';
import { DownloadIcon, FileTextIcon, TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { DefaultButton } from './../../components/button/index';
import { useTasksContext } from '../../contexts/TasksContext/userTaskContext';

import styles from './styles.module.css';
import { TaskActionTypes } from '../../contexts/TasksContext/taskActions';
import { ConfirmModal } from '../../components/Modal';
import { showMessage } from '../../adapters/showMessage';
import { formateDate } from '../../utils/formateDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { exportHistoryToPDF } from '../../utils/exportTasksToPDF';
import { exportHistoryToCSV } from '../../utils/exportHistoryToCSV';

export function HistoryPage() {
  const { state, dispatch } = useTasksContext();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<string | null>(null);
  const [deleteMode, setDeleteMode] = useState<'task' | 'history'>('task');
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => ({
      tasks: sortTasks({ tasks: state.tasks }),
      field: 'startDate',
      direction: 'desc',
    }),
  );

  const hasTasks = state.tasks.length > 0;

  useEffect(() => {
    setSortTasksOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  const handleSortTasks = ({ field }: Pick<SortTasksOptions, 'field'>) => {
    const newDirection = sortTasksOptions.direction === 'asc' ? 'desc' : 'asc';

    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  };

  const handleDeleteClick = (id: string) => {
    setDeleteMode('task');
    setTaskIdToDelete(id);
    setShowConfirmModal(true);
  };

  const handleResetHistory = () => {
    setDeleteMode('history');
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    if (deleteMode === 'task' && taskIdToDelete) {
      dispatch({
        type: TaskActionTypes.REMOVE_TASK,
        payload: { id: taskIdToDelete },
      });
      showMessage.success('Tarefa excluída com sucesso!');
    }

    if (deleteMode === 'history') {
      dispatch({ type: TaskActionTypes.RESET_STATE });
      showMessage.success('Histórico de tarefas excluído com sucesso!');
    }

    setShowConfirmModal(false);
    setTaskIdToDelete(null);
  };

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>

          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                data-testid='clearHistory'
                className='clearHistory'
                aria-label='Apagar todo histórico'
                title='Apagar histórico'
                onClick={handleResetHistory}
              />
              <DefaultButton
                icon={<DownloadIcon />}
                aria-label='Exportar histórico em PDF'
                className='downloadHistoryPDF'
                data-testid='downloadHistoryPDF'
                title='Exportar histórico em PDF'
                onClick={() => exportHistoryToPDF(state.tasks)}
              />

              <DefaultButton
                icon={<FileTextIcon />}
                aria-label='Exportar histórico em CSV'
                title='Exportar histórico em CSV'
                className='downloadHistoryCSV'
                data-testid='downloadHistoryCSV'
                onClick={() => exportHistoryToCSV(state.tasks)}
              />
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        {hasTasks ? (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: 'name' })}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: 'duration' })}
                  >
                    Duração ↕
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {sortTasksOptions.tasks.map(task => {
                  const taskTypeDictionary = {
                    workTime: 'Foco',
                    shortBreakTime: 'Pausa Curta',
                    longBreakTime: 'Pausa Longa',
                  };
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formateDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                      <td>
                        <div className={styles.buttonContainer}>
                          <DefaultButton
                            icon={<TrashIcon size={16} />}
                            color='red'
                            aria-label='Excluir tarefa'
                            title='Excluir tarefa'
                            onClick={() => handleDeleteClick(task.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Ainda não existe nenhuma tarefa criada no histórico.</p>
        )}
      </Container>

      <ConfirmModal
        isOpen={showConfirmModal}
        message={
          deleteMode === 'history'
            ? 'Tem certeza que deseja apagar todo o histórico de tarefas?'
            : 'Tem certeza que deseja excluir esta tarefa?'
        }
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={confirmDelete}
      />
    </MainTemplate>
  );
}
