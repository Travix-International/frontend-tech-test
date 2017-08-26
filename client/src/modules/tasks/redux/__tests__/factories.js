import { v4 as generateUUID } from 'uuid';

export const httpFactory = ({
  isFetching = false,
  error = null,
} = {}) => ({
  isFetching, error,
});

export const taskFactory = ({
  id = generateUUID(),
  title = 'Title',
  description = 'Description',
} = {}) => ({
  id, title, description,
});

export const normalizeTask = task => ({ [task.id]: task });

export const actionFactory = ({
  type = 'travix/common/DEFAULT',
  payload = {},
  error,
  meta,
} = {}) => ({
  type, payload, error, meta,
});
