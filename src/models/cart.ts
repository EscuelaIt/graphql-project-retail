import { Model } from 'objection';
import { Client } from './client';
import { Product } from './product';

export class Cart extends Model {
  
  static get tableName () {
    return 'cart';
  }

  static get relationMappings () {
    return {
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: Client,
        join: {
          from: 'cart.client_id',
          to: 'client.id'
        }
      },
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: 'cart.id',
          through: {
            // cart_product is the join table.
            from: 'cart_product.cart_id',
            to: 'cart_product.product_id'
          },
          to: 'product.id'
        }
      }
    }
  }
  
};