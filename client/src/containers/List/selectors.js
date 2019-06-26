import { createSelector, defaultMemoize } from 'reselect';
import { get } from '../../modules/lib';

export default selectListState => {
  const selectEdits = createSelector(
    selectListState,
    listState => listState.list.edit
  );
  const selectRemove = createSelector(
    selectListState,
    listState => listState.list.remove
  );
  const selectDirectUpdate = createSelector(
    selectListState,
    listState => listState.list.directUpdate
  );
  const selectPagingState = createSelector(
    selectListState,
    listState => listState.page
  );
  const getPageInfo = (result, pagingState) => ({
    current: pagingState.current,
    total: get(
      result,
      ['page', 'total'],
      pagingState.total
    ),
  });
  const cols = {
    xl: 7,
    lg: 5,
    md: 4,
    sm: 2,
    xs: 1,
  };
  return selectListPage => {
    const selector = defaultMemoize(width =>
      createSelector(
        selectPagingState,
        page =>
          createSelector(
            selectListPage(page.current),
            selectEdits,
            selectRemove,
            selectDirectUpdate,
            (result, edit, remove, directUpdate) => ({
              result,
              edit,
              remove,
              directUpdate,
              cols: cols[width],
              page: getPageInfo(result, page),
            })
          )
      )
    );
    return (state, { width }) =>
      selector(width)(state)(state);
  };
};
