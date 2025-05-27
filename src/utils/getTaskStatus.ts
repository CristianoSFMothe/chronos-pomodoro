import type { TaskModel } from '../models/TasksModel';

export const getTaskStatus = (
  task: TaskModel,
  activeTask: TaskModel | null,
) => {
  if (task.completedDate) return 'Completada';
  if (task.interruptedDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Em Progresso';
  return 'Abandonada';
};
