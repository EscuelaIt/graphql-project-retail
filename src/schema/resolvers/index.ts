import { allClients } from './client/allClients';
import { createClient } from './client/createClient';
import { getClient } from './client/getClient';
import { deleteClient } from './client/deleteClient';

import { allProducts } from './product/allProducts';
import { getCart } from './cart/getCart';
import { allCarts } from './cart/allCarts';

import { allComments } from './comment/allComments';


export const resolvers = {
  Query: {
    allProducts,
    allClients,
    getCart,
    getClient,
    allCarts,
    allComments
  },
  Mutation: {
    createClient,
    deleteClient
  }
}