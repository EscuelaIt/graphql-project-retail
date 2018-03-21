import { Cart } from './../../../models/cart';

export const getCart = (_, params) => {
  return Cart.query()
  .findById(params.id)
  .eager('[client,products]');
}