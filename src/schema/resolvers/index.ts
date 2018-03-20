import { allProducts } from './allProducts';
import { allClients } from './allClients';
import { getCart } from './getCart';

export const resolvers = {
  Query: {
    allProducts,
    allClients,
    getCart
  }
}