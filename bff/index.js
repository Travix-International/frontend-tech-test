import DataLoader from 'dataloader';

import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

import fetch from 'node-fetch';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import schema from './schema';

import * as resolvers from "./resolvers";
import * as _loaders from "./loaders";

import {
  bff as config,
  restApi as restApiConfig
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
  endpointURL: '/graphql'
}));

server.listen(config.port, () => console.log(`GraphQL Server on port ${config.port}`));
