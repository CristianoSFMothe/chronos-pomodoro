import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Task {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completedDate?: number | null;
  interruptedDate?: number | null;
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
}

export const exportHistoryToPDF = (tasks: Task[]) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text('Histórico de Tarefas', 14, 20);

  const taskTypeDictionary = {
    workTime: 'Foco',
    shortBreakTime: 'Pausa Curta',
    longBreakTime: 'Pausa Longa',
  };

  const rows = tasks.map(task => [
    task.name,
    `${task.duration} min`,
    new Date(task.startDate).toLocaleString(),
    task.completedDate
      ? 'Concluída'
      : task.interruptedDate
      ? 'Interrompida'
      : 'Em andamento',
    taskTypeDictionary[task.type],
  ]);

  autoTable(doc, {
    head: [['Nome', 'Duração', 'Data', 'Status', 'Tipo']],
    body: rows,
    startY: 30,
  });

  doc.save('historico_tarefas.pdf');
};
