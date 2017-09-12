import { schema } from 'normalizr';

export const todo = new schema.Entity('todo', {}, { idAttribute: 'id' });
export const arrayOfTodos = new schema.Array(todo);
