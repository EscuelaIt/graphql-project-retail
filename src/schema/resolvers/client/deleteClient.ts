import { Client } from './../../../models/client';

export const deleteClient = (_, params) => {
  return Client.query().deleteById(params.id)
  .then(response => {
    return params.id;
  });
}