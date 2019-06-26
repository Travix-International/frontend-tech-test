const failed = type => ({ fromAction, errorMessage }) => ({
  type,
  payload: { fromAction, errorMessage },
});

export default actionNameSpace => {
  const FETCH_PAGE = `${actionNameSpace}: FETCH_PAGE`;
  const FETCH_PAGE_SUCCESS = `${actionNameSpace}: FETCH_PAGE_SUCCESS`;
  const FETCH_PAGE_FAILED = `${actionNameSpace}: FETCH_PAGE_FAILED`;
  const EDIT = `${actionNameSpace}: EDIT`;
  const UPDATE = `${actionNameSpace}: UPDATE`;
  const CANCEL_UPDATE = `${actionNameSpace}: CANCEL_UPDATE`;
  const UPDATE_SUCCESS = `${actionNameSpace}: UPDATE_SUCCESS`;
  const UPDATE_FAILED = `${actionNameSpace}: UPDATE_FAILED`;
  const DIRECT_UPDATE = `${actionNameSpace}: DIRECT_UPDATE`;
  const DIRECT_UPDATE_SUCCESS = `${actionNameSpace}: DIRECT_UPDATE_SUCCESS`;
  const DIRECT_UPDATE_FAILED = `${actionNameSpace}: DIRECT_UPDATE_FAILED`;
  const NEW = `${actionNameSpace}: NEW`;
  const NEW_CANCEL = `${actionNameSpace}: NEW_CANCEL`;
  const SAVE_NEW = `${actionNameSpace}: SAVE_NEW`;
  const NEW_SUCCESS = `${actionNameSpace}: NEW_SUCCESS`;
  const NEW_FAILED = `${actionNameSpace}: NEW_FAILED`;
  const CONFIRM_DELETE = `${actionNameSpace}: CONFIRM_DELETE`;
  const DELETE_SUCCESS = `${actionNameSpace}: DELETE_SUCCESS`;
  const DELETE_FAILED = `${actionNameSpace}: DELETE_FAILED`;
  const REFRESH_PAGE = `${actionNameSpace}: REFRESH_PAGE`;
  const NEW_FIELD_CHANGE = `${actionNameSpace}: NEW_FIELD_CHANGE`;
  const REQUEST_DELETE = `${actionNameSpace}: REQUEST_DELETE`;
  const CANCEL_DELETE = `${actionNameSpace}: CANCEL_DELETE`;
  const FIELD_CHANGE = `${actionNameSpace}: FIELD_CHANGE`;
  const CHANGE_PAGE = `${actionNameSpace}: CHANGE_PAGE`;

  return {
    // action types
    FETCH_PAGE,
    FETCH_PAGE_SUCCESS,
    FETCH_PAGE_FAILED,
    EDIT: EDIT,
    UPDATE: UPDATE,
    CANCEL_UPDATE: CANCEL_UPDATE,
    UPDATE_SUCCESS: UPDATE_SUCCESS,
    UPDATE_FAILED: UPDATE_FAILED,
    DIRECT_UPDATE: DIRECT_UPDATE,
    DIRECT_UPDATE_SUCCESS: DIRECT_UPDATE_SUCCESS,
    DIRECT_UPDATE_FAILED: DIRECT_UPDATE_FAILED,
    NEW: NEW,
    NEW_CANCEL: NEW_CANCEL,
    SAVE_NEW: SAVE_NEW,
    NEW_SUCCESS: NEW_SUCCESS,
    NEW_FAILED: NEW_FAILED,
    CONFIRM_DELETE: CONFIRM_DELETE,
    DELETE_SUCCESS: DELETE_SUCCESS,
    DELETE_FAILED: DELETE_FAILED,
    REFRESH_PAGE,
    NEW_FIELD_CHANGE: NEW_FIELD_CHANGE,
    REQUEST_DELETE: REQUEST_DELETE,
    CANCEL_DELETE: CANCEL_DELETE,
    FIELD_CHANGE: FIELD_CHANGE,
    CHANGE_PAGE,
    //action creators
    initActionCreators: statePath => ({
      updateItem: item => ({
        type: UPDATE,
        payload: { item, statePath },
      }),
      directUpdate: item => ({
        type: DIRECT_UPDATE,
        payload: { item, statePath },
      }),

      cancelUpdate: item => ({
        type: CANCEL_UPDATE,
        payload: { item, statePath },
      }),
      requestDeleteItem: item => ({
        type: REQUEST_DELETE,
        payload: { item, statePath },
      }),
      cancelDeleteItem: () => ({
        type: CANCEL_DELETE,
        payload: { statePath },
      }),
      confirmDeleteItem: item => ({
        type: CONFIRM_DELETE,
        payload: { item, statePath },
      }),
      editItem: item => ({
        type: EDIT,
        payload: { item, statePath },
      }),
      createItemFieldChange: fieldName => (id, value) => ({
        type: FIELD_CHANGE,
        payload: {
          change: {
            id,
            fieldName,
            value,
          },
          statePath,
        },
      }),
      fetchItems: page => ({
        type: FETCH_PAGE,
        payload: { page, statePath },
      }),
      changePage: page => ({
        type: CHANGE_PAGE,
        payload: { page: Number(page), statePath },
      }),
      saveNewItem: item => ({
        type: SAVE_NEW,
        payload: { item, statePath },
      }),
    }),
    fetchItemsSuccess: (result, statePath) => ({
      type: FETCH_PAGE_SUCCESS,
      payload: { result, statePath },
    }),
    fetchItemsFailed: (page, errorMessage, statePath) => ({
      type: FETCH_PAGE_FAILED,
      payload: {
        errorMessage,
        page,
        statePath,
      },
    }),
    updateItemSuccess: ({ item, statePath }) => ({
      type: UPDATE_SUCCESS,
      payload: { item, statePath },
    }),
    directUpdateSuccess: ({ item, statePath }) => ({
      type: DIRECT_UPDATE_SUCCESS,
      payload: { item, statePath },
    }),
    updateItemFailed: failed(UPDATE_FAILED),
    newItemFailed: failed(NEW_FAILED),
    deleteItemFailed: failed(DELETE_FAILED),
    directUpdateFailed: failed(DIRECT_UPDATE_FAILED),
    newItem: () => ({ type: NEW }),
    newCancel: () => ({ type: NEW_CANCEL }),
    newItemSuccess: item => ({
      type: NEW_SUCCESS,
      payload: item,
    }),
    deleteItemSuccess: item => ({
      type: DELETE_SUCCESS,
      payload: item,
    }),
    refreshPage: (page, statePath) => ({
      type: REFRESH_PAGE,
      payload: { page, statePath },
    }),
    createNewItemFieldChange: fieldName => (id, value) => ({
      type: NEW_FIELD_CHANGE,
      payload: {
        id,
        fieldName,
        value,
      },
    }),
  };
};
