import { Task } from './../../../models/task';

export const deleteTask = (_, params) => {
  return Task.query().deleteById(params.id)
  .then(response => {
    return params.id;
  });
}