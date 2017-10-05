export const Mutation = {
  updateTodo: (root, args, { loaders }) => loaders.todo.update(args),
  createTodo: (root, args, { loaders }) => loaders.todo.create(args),
  deleteTodo: (root, { id }, { loaders }) => loaders.todo.delete(id)
};
