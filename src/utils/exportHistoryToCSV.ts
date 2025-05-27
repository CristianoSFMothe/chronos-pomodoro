import type { TaskModel } from '../models/TasksModel';

export function exportHistoryToCSV(tasks: TaskModel[]) {
  if (!tasks.length) return;

  const headers = [
    'ID',
    'Nome',
    'Duração',
    'Data de Início',
    'Data de Conclusão',
    'Tipo',
  ];

  const rows = tasks.map(task => [
    task.id,
    task.name,
    task.duration.toString(),
    new Date(task.startDate).toLocaleString(),
    task.completedDate ? new Date(task.completedDate).toLocaleString() : '',
    task.type,
  ]);

  const csvContent = [headers, ...rows]
    .map(e => e.map(v => `"${v.replace(/"/g, '""')}"`).join(','))
    .join('\n');

  // Adiciona BOM \uFEFF para evitar problema de acentuação no Excel
  const csvWithBOM = '\uFEFF' + csvContent;

  const blob = new Blob([csvWithBOM], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'historico_tarefas.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
