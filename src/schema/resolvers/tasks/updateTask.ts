import { Task } from './../../../models/task';

export const updateTask = (_, params) => {
  const id = params.id;
  const task = params.task;
  return Task.query().patchAndFetchById(id, task);
}