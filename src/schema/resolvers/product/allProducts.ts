import { Product } from './../../../models/product';

export const allProducts = (_, params) => {
  return Product.query();
}