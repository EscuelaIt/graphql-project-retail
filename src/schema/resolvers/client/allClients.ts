import { Client } from './../../../models/client';

export const allClients = (_, params) => {
  return Client.query();
}