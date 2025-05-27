import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { DefaultButton } from './../../components/button/index';

import styles from './styles.module.css';

export function HistoryPage() {
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
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 20 }).map((_, index) => {
                return (
                  <tr key={index}>
                    <td>Estudar</td>
                    <td>25min</td>
                    <td>27/05/2025 10:00</td>
                    <td>Completa</td>
                    <td>Foco</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
