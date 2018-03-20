import { Client } from './../../../models/client';

export const getClient = (_, params) => {
  return Client.query().findById(params.id);
}