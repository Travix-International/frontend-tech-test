import * as types from "./types";
import * as mutations from "./mutations";
import * as queries from "./queries";

export default [
  ...Object.keys(types).map(key => types[key]),
  ...Object.keys(queries).map(key => queries[key]),
  ...Object.keys(mutations).map(key => mutations[key])
];
