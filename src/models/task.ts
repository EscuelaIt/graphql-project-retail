import { Model } from 'objection';

export class Task extends Model {
  
  static get tableName () {
    return 'task';
  }
  
};