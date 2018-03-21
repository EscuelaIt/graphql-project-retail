import * as express from "express";
import * as bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import {MongoClient, ObjectId} from 'mongodb';

import { schema } from './schema';

const MONGO_URL = 'mongodb://localhost:27017';

export let MONGO_DB;

MongoClient.connect(MONGO_URL, function(err, client) {
  console.log("Connected successfully to server");
  MONGO_DB = client.db('retail');
});

const app = new express();
const PORT = 4300;

require('./database/setup');

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

app.listen(PORT, () => {
  console.log('OK');
});