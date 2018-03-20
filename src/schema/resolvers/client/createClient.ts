import { Client } from './../../../models/client';

export const createClient = (_, params) => {
  return Client.query().insert(params.client);
}