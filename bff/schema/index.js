import * as types from "./types";
import * as mutations from "./mutations";
import * as queries from "./queries";
import * as subscriptions from "./subscriptions";

const rootSchema = `
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

export default [
  rootSchema,
  ...Object.keys(types).map(key => types[key]),
  ...Object.keys(queries).map(key => queries[key]),
  ...Object.keys(mutations).map(key => mutations[key]),
  ...Object.keys(subscriptions).map(key => subscriptions[key])
];
