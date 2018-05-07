import { allClients } from './client/allClients';
import { createClient } from './client/createClient';
import { getClient } from './client/getClient';
import { deleteClient } from './client/deleteClient';

import { allProducts } from './product/allProducts';
import { getCart } from './cart/getCart';
import { allCarts } from './cart/allCarts';

import { allComments } from './comment/allComments';
import { allTasks } from './tasks/allTasks';
import { getTask } from './tasks/getTask';
import { createTask } from './tasks/createTask';
import { deleteTask } from './tasks/deleteTask';
import { updateTask } from './tasks/updateTask';


export const resolvers = {
  Query: {
    allProducts,
    allClients,
    getCart,
    getClient,
    allCarts,
    allComments,
    allTasks,
    getTask
  },
  Mutation: {
    createClient,
    deleteClient,
    createTask,
    deleteTask,
    updateTask
  }
}