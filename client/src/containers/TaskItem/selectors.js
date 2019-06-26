import { createSelector, defaultMemoize } from 'reselect';
const selectItem = props => props.item;
const selectEdit = props => props.edit;
const selectDirectUpdate = props => props.directUpdate;
const selectRemove = props => props.remove;
const createMergeWithEdit = () =>
  defaultMemoize((item, { item: editItem, ...rest }) => ({
    item: { ...item, ...editItem },
    edit: true,
    error: rest.error,
    working: rest.working,
  }));
const createMergeWithRemove = () =>
  defaultMemoize(
    (item, { error, working }, directUpdate) => ({
      item,
      edit: false,
      error,
      working: working || directUpdate,
      removeRequested: true,
    })
  );
export const createSelectTaskItem = () => {
  const createItemWithEdit = defaultMemoize(
    (item, directUpdate) => ({
      item,
      edit: false,
      removeRequested: false,
      working: Boolean(directUpdate),
    })
  );
  const mergeWithEdit = createMergeWithEdit();
  const mergeWithRemove = createMergeWithRemove();
  return createSelector(
    selectItem,
    selectEdit,
    selectRemove,
    selectDirectUpdate,
    (item, edit, remove, directUpdate) => {
      let { id } = item;
      if (!edit[id] && !remove[id]) {
        return createItemWithEdit(item, directUpdate[id]);
      }
      if (edit[id]) {
        return mergeWithEdit(item, edit[item.id]);
      }
      if (remove[id]) {
        return mergeWithRemove(
          item,
          remove,
          Boolean(directUpdate[id])
        );
      }
    }
  );
};
