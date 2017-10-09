export const Query = {
  todo: (parent, { id }, { loaders }) => loaders.todo.load(id),
  todos: (parent, args, { loaders }) => loaders.todo.loadAll()
};
