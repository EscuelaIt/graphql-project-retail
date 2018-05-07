import { Task } from './../../../models/task';

export const getTask = (_, params) => {
  return Task.query().findById(params.id);
}