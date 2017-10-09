import { createServer } from 'http';
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from 'graphql-tools';
import { execute, subscribe } from 'graphql';

import * as resolvers from "./resolvers";
import * as _loaders from "./loaders";

import schema from './schema';

import {
  bff as config,
  restApi as restApiConfig,
  socket as socketConfig
} from "../config.json"

const server = express();

server.use(cors());

server.use(bodyParser.json());

server.use("/graphql", graphqlExpress((req) => {

  const loaders = Object.keys(_loaders).reduce((loaders, key) => {
    loaders[key] = _loaders[key]();

    return loaders;
  }, {});

  return {
    schema: makeExecutableSchema({
      typeDefs: schema,
      resolvers,
    }),
    context: {
      loaders
    },
    formatError: (err) => { console.log(err); return err }
  };
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${socketConfig.port}/subscriptions`
}));

const ws = createServer(server);
ws.listen(socketConfig.port, () => {
  new SubscriptionServer({
    execute,
    schema: makeExecutableSchema({
      typeDefs: schema,
      resolvers
    }),
  }, {
    server: ws,
    path: '/subscriptions',
  });
});

server.listen(config.port, () => console.log(`Apollo Server on port ${config.port}`));
