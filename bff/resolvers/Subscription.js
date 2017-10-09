import { pubsub } from "../utils/subscription";
import { withFilter } from 'graphql-subscriptions';
import { TODO_ADDED, TODO_UPDATED, TODO_REMOVED } from "../constants/topics";

export const Subscription = {
  todoAdded: {
    subscribe: () => pubsub.asyncIterator(TODO_ADDED)
  },
  todoUpdated: {
    subscribe: () => pubsub.asyncIterator(TODO_UPDATED)
  },
  todoRemoved: {
    subscribe: () => pubsub.asyncIterator(TODO_REMOVED)
  }
};
