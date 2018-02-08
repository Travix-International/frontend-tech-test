import { createSelector } from 'reselect';

import { key } from './constants';

const selectTodoFormStore = state => state.get(key);

const selectLoading = () => createSelector(
  selectTodoFormStore,
  todoFormStore => todoFormStore.get('loading')
);

const selectTitle = () => createSelector(
  selectTodoFormStore,
  todoFormStore => todoFormStore.get('title')
);

const selectDescription = () => createSelector(
  selectTodoFormStore,
  todoFormStore => todoFormStore.get('description')
);

export {
  selectTodoFormStore,
  selectLoading,
  selectTitle,
  selectDescription
};
