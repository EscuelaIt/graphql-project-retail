import { MONGO_DB } from './../../../server';

export const allComments = async (_, params) => {
  const collection = await MONGO_DB
  .collection('comments')
  .find({})
  .toArray();
  return collection.map(item => {
    item._id = item._id.toString();
    return item;
  });
}