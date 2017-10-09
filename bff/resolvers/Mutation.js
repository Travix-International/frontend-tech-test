import { pubsub } from "../utils/subscription";
import { TODO_ADDED, TODO_UPDATED, TODO_DELETED } from "../constants/topics";

export const Mutation = {
  updateTodo: (root, args, { loaders }) => loaders.todo
    .update(args)
    .then((result) => {
      pubsub.publish(TODO_UPDATED, args );

      return Promise.resolve(args);
    }),
  createTodo: (root, args, { loaders }) => loaders.todo
    .create(args)
    .then((result) => {
      pubsub.publish(TODO_ADDED, { [TODO_ADDED]: result} );

      return Promise.resolve(result);
    }),
  deleteTodo: (root, { id }, { loaders }) => loaders.todo
    .delete(id)
    .then((result) => {
      pubsub.publish(TODO_DELETED, { todoRemoved: {id} });

      return Promise.resolve({id});
    })
};
