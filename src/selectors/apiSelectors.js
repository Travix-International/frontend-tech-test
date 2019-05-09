import { get } from 'lodash';
import { createSelector } from 'reselect';

export const isPending = entity => state => {
  const path = `api.${entity}.pending`;
  return !!get(state, path);
};

export const isFailure = entity => state => {
  const path = `api.${entity}.failure`;
  return !!get(state, path);
};

export const getError = entity => state => {
  const path = `api.${entity}.error`;
  return get(state, path);
};

export const isSavingTask = createSelector(
  isPending('addTask'),
  isPending('editTask'),
  (add, edit) => add || edit
);

export const isDeletingTask = isPending('deleteTask');