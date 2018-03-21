import { Cart } from './../../../models/cart';

export const allCarts = () => {
  return Cart.query().eager('[client,products]');
}