import { createSelector, defaultMemoize } from 'reselect';
import { get } from '../lib';

const loading = { loading: true, error: false };

export default selectDataState => {
  const selectItemPages = createSelector(
    selectDataState,
    itemsState => itemsState.pages
  );
  const selectItemData = createSelector(
    selectDataState,
    itemsState => itemsState.data
  );
  const selectNewItemState = createSelector(
    selectDataState,
    itemsState => itemsState.new
  );

  const initSelectItemsPage = () =>
    defaultMemoize(
      //memoize page, since no filtering or sorting are implemented
      //  page is the only parameter in the query
      page => {
        return createSelector(
          selectItemPages,
          selectItemData,
          (pages, data) => {
            const pageResult = get(pages, [page], loading);
            if (!pageResult.loading && !pageResult.error) {
              return {
                loading: false,
                error: false,
                page: {
                  current: page,
                  total: pages.total,
                },
                data: pages[page].ids.map(id => data[id]),
              };
            }
            return pageResult;
          }
        );
      }
    );

  const selectListState = (state, statePath) =>
    statePath.reduce((result, key) => result[key], state);

  return {
    selectItemPages,
    selectItemData,
    selectNewItemState,
    initSelectItemsPage,
    selectListState,
  };
};
