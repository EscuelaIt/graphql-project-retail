import { Model } from 'objection';

export class Product extends Model {
  
  static get tableName () {
    return 'product';
  }
  
};