import { Task } from './../../../models/task';

export const allTasks = (_, params) => {
  return Task.query();
}