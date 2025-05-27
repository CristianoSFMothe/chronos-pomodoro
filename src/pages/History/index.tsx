import { useState } from 'react';
import { TrashIcon } from 'lucide-react';
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

export function HistoryPage() {
  const { state, dispatch } = useTasksContext();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setTaskIdToDelete(id);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    if (taskIdToDelete) {
      dispatch({
        type: TaskActionTypes.REMOVE_TASK,
        payload: { id: taskIdToDelete },
      });
      showMessage.success('Tarefa excluída com sucesso!');
    }
    setShowConfirmModal(false);
    setTaskIdToDelete(null);
  };

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>

          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              data-testid='clearHistory'
              className='clearHistory'
              aria-label='Apagar todo histórico'
              title='Apagar histórico'
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              const taskTypeDictionary = {}
              {state.tasks.map(task => {
                const taskTypeDictionary = {
                  workTime: 'Foco',
                  shortBreakTime: 'Pausa Curta',
                  longBreakTime: 'Pausa Longa',
                };
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
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
      </Container>

      <ConfirmModal
        isOpen={showConfirmModal}
        message='Tem certeza que deseja excluir esta tarefa?'
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={confirmDelete}
      />
    </MainTemplate>
  );
}
