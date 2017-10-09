export const RootQuery = `
  type Query {
    todo(id: String!): Todo
    todos: [Todo]
  }
`;
