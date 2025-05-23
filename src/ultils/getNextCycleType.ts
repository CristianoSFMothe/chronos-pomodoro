import type { TaskModel } from '../models/TasksModel';

export const getNextCycleType = (currentCycle: number): TaskModel['type'] => {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBeakTime';

  return 'workTime';
};
