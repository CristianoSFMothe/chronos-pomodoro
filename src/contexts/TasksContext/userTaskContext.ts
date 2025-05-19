import { useContext } from 'react';
import { TaskContext } from './TaskContext';

export const useTasksContext = () => {
  return useContext(TaskContext);
};
