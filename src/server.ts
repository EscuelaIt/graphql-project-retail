import * as express from "express";
import * as bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { schema } from './schema';

const app = new express();
const PORT = 4300;

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