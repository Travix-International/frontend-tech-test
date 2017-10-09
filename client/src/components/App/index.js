import { bff as bffConfig, socket as socketConfig } from "../../../../config.json";
import React from "react";

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";
import { SubscriptionClient, addGraphQLSubscriptions } from "subscriptions-transport-ws";

import Dashboard from "../Dashboard";

import style from "lib/style/master.pcss";

const networkInterface = createNetworkInterface({ uri: `http://localhost:${bffConfig.port}/graphql` });
const wsClient = new SubscriptionClient(`ws://localhost:${socketConfig.port}/subscriptions`, {
  reconnect: true
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});

const App = () => (
  <ApolloProvider client={client}>
    <Dashboard />
  </ApolloProvider>
);

export default App;
