export const TodoMutation = `
  type Mutation {

    createTodo (
      title: String!
      description: String!
    ): Todo

    updateTodo (
      id: String!
      title: String!
      description: String!
    ): Todo

    deleteTodo (
      id: String
    ): Todo

  }
`;
