import { allProducts } from './allProducts';
import { allClients } from './allClients';
import { getCart } from './getCart';
import { createClient } from './createClient';

export const resolvers = {
  Query: {
    allProducts,
    allClients,
    getCart
  },
  Mutation: {
    createClient
  }
}