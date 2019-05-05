import { get } from 'lodash';

export const isPending = entity => state => {
  const path = `api.${entity}.pending`;
  return get(state, path);
};

export const isFailure = entity => state => {
  const path = `api.${entity}.failure`;
  return get(state, path);
};

export const getError = entity => state => {
  const path = `api.${entity}.error`;
  return get(state, path);
};