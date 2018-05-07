import { Task } from './../../../models/task';

export const createTask = (_, params) => {
  return Task.query().insert(params.task);
}