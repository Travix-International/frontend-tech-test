export default ({
  actions,
  selectors,
  listPaths,
  API_ROOT,
  urlItemPath,
  urlPagePath,
}) => {
  const {
    FETCH_PAGE,
    fetchItemsSuccess,
    fetchItemsFailed,
    UPDATE,
    DIRECT_UPDATE,
    updateItemSuccess,
    updateItemFailed,
    directUpdateSuccess,
    directUpdateFailed,
    SAVE_NEW,
    newItemSuccess,
    CONFIRM_DELETE,
    deleteItemSuccess,
    refreshPage,
    REFRESH_PAGE,
    initActionCreators,
    newItemFailed,
    deleteItemFailed,
  } = actions;
  const {
    initSelectItemsPage,
    selectListState,
    selectItemPages,
  } = selectors;
  const selectItemsPage = initSelectItemsPage();
  const handleServerError = res => {
    if (res.error) {
      throw new Error(res.message);
    }
    return res;
  };
  const persistItem = ({
    action,
    store,
    success,
    fail,
    beforeSuccess,
    method,
  }) => {
    const { item, statePath } = action.payload;
    //remove this part, it is here to test
    Promise.resolve()
      .then(() => {
        if (method === 'DELETE') {
          // throw new Error('Throw a wrench into it!!');
        }
      })
      .then(() =>
        fetch(`${API_ROOT}${urlItemPath}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        })
      )
      .then(res => res.json())
      .then(handleServerError)
      .then(beforeSuccess)
      .then(item =>
        store.dispatch(success({ item, statePath }))
      )
      .catch(e => {
        store.dispatch(
          fail({
            errorMessage: e.message,
            fromAction: action,
          })
        );
      });
  };

  const changePageIfLast = store => res => {
    listPaths.forEach(listPath => {
      const state = store.getState();
      const { current } = selectListState(
        state,
        listPath
      ).page;
      const result = selectItemsPage(current)(state);
      if (!result.loading && !result.error) {
        const total = selectItemPages(state).total;
        const { data } = result;
        if (
          data.length === 1 &&
          current === total &&
          current !== 1
        ) {
          const { changePage } = initActionCreators(
            listPath.concat('page')
          );
          store.dispatch(changePage(current - 1));
        }
      }
    });
    return res;
  };
  const refreshIfLast = store => res => {
    //refresh a page of any list if it's the last page
    listPaths.forEach(listPath => {
      const state = store.getState();
      const { current } = selectListState(
        state,
        listPath
      ).page;
      const total = selectItemPages(state).total;
      if (current === total) {
        store.dispatch(refreshPage(current, listPath));
      }
    });
    return res;
  };
  const fetchPage = ({ store, page, statePath }) =>
    fetch(`${API_ROOT}${urlPagePath(page)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(handleServerError)
      .then(res => {
        store.dispatch(fetchItemsSuccess(res, statePath));
      })
      .catch(({ message }) =>
        store.dispatch(
          fetchItemsFailed(page, message, statePath)
        )
      );

  return store => next => action => {
    if (action.type === FETCH_PAGE) {
      const { page, statePath } = action.payload;
      //do not fetch if data is already in state
      const pageResult = selectItemsPage(page)(
        store.getState()
      );
      if (!pageResult.loading && !pageResult.error) {
        //early return if data is already in state and action isn't fetch
        //  do not call next as loading does not need to be set
        return;
      }
      fetchPage({ store, page, statePath });
    }
    if (action.type === REFRESH_PAGE) {
      const { page, statePath } = action.payload;
      fetchPage({ store, page, statePath });
    }
    if (action.type === UPDATE) {
      persistItem({
        action,
        store,
        beforeSuccess: x => x,
        success: updateItemSuccess,
        fail: updateItemFailed,
        method: 'PUT',
      });
    }
    if (action.type === DIRECT_UPDATE) {
      persistItem({
        action,
        store,
        beforeSuccess: x => x,
        success: directUpdateSuccess,
        fail: directUpdateFailed,
        method: 'PUT',
      });
    }
    if (action.type === SAVE_NEW) {
      persistItem({
        action,
        store,
        success: newItemSuccess,
        fail: newItemFailed,
        beforeSuccess: refreshIfLast(store, action),
        method: 'POST',
      });
    }
    if (action.type === CONFIRM_DELETE) {
      persistItem({
        action,
        store,
        success: deleteItemSuccess,
        fail: deleteItemFailed,
        beforeSuccess: changePageIfLast(store, action),
        method: 'DELETE',
      });
    }
    next(action);
  };
};
