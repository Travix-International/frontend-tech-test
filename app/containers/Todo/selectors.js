import { createSelector } from 'reselect';

import { key } from './constants';

const selectTodoStore = state => state.get(key);

const selectLoading = () => createSelector(
  selectTodoStore,
  todoStore => todoStore.get('loading')
);

const selectData = () => createSelector(
  selectTodoStore,
  todoStore => todoStore.get('data').toJS()
);

export {
  selectTodoStore,
  selectLoading,
  selectData
};
