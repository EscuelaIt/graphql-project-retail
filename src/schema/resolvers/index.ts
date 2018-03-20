import { allProducts } from './allProducts';
import { allClients } from './client/allClients';
import { getCart } from './getCart';
import { createClient } from './client/createClient';
import { getClient } from './client/getClient';
import { deleteClient } from './client/deleteClient';

export const resolvers = {
  Query: {
    allProducts,
    allClients,
    getCart,
    getClient
  },
  Mutation: {
    createClient,
    deleteClient
  }
}