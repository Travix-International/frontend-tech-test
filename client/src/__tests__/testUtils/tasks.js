import { v4 as generateUUID } from 'uuid';

export const taskFactory = ({
  id = generateUUID(),
  title = 'Title',
  description = 'Description',
} = {}) => ({
  id, title, description,
});
