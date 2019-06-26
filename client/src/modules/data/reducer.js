import { get, reduceStatePath } from '../lib';

export default (actions, dataStatePath) => {
  const {
    FETCH_PAGE,
    FETCH_PAGE_SUCCESS,
    FETCH_PAGE_FAILED,
    UPDATE_SUCCESS,
    DIRECT_UPDATE,
    DIRECT_UPDATE_SUCCESS,
    CANCEL_UPDATE,
    NEW,
    NEW_SUCCESS,
    NEW_CANCEL,
    REFRESH_PAGE,
    UPDATE,
    REQUEST_DELETE,
    CANCEL_DELETE,
    DELETE_SUCCESS,
    CONFIRM_DELETE,
    EDIT,
    FIELD_CHANGE,
    CHANGE_PAGE,
    SAVE_NEW,
    UPDATE_FAILED,
    DELETE_FAILED,
    NEW_FAILED,
    NEW_FIELD_CHANGE,
  } = actions;
  const defaultDataState = {
    pages: {},
    data: {},
    new: {},
  };
  const itemsReducer = action => state => {
    if (action.type === FETCH_PAGE) {
      const { page } = action.payload;
      return {
        ...state,
        pages: {
          ...state.pages,
          [page]: {
            ...state.pages[page],
            loading: get(
              state.pages,
              [page, 'loading'],
              true
            ),
            error: false,
          },
        },
      };
    }
    if (action.type === DELETE_SUCCESS) {
      return { ...state, pages: {}, data: {} };
    }
    if (action.type === FETCH_PAGE_SUCCESS) {
      const {
        result: {
          data,
          page: { current, total },
        },
      } = action.payload;
      return {
        ...state,
        pages: {
          ...state.pages,
          total,
          [current]: {
            error: false,
            loading: false,
            ids: data.map(item => item.id),
          },
        },
        data: data.reduce(
          (result, item) => ({
            ...result,
            [item.id]: item,
          }),
          state.data
        ),
      };
    }
    if (action.type === FETCH_PAGE_FAILED) {
      const { page, errorMessage } = action.payload;
      return {
        ...state,
        pages: {
          ...state.pages,
          [page]: {
            loading: false,
            error: true,
            errorMessage,
          },
        },
      };
    }
    if (
      action.type === UPDATE_SUCCESS ||
      action.type === DIRECT_UPDATE_SUCCESS
    ) {
      const { item } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [item.id]: item,
        },
      };
    }
    if (action.type === NEW) {
      return {
        ...state,
        new: {
          ...state.new,
          show: true,
          item: { title: '', description: '' },
        },
      };
    }
    if (action.type === NEW_FIELD_CHANGE) {
      const { fieldName, value } = action.payload;
      return {
        ...state,
        new: {
          ...state.new,
          item: { ...state.new.item, [fieldName]: value },
        },
      };
    }
    if (
      action.type === NEW_SUCCESS ||
      action.type === NEW_CANCEL
    ) {
      return {
        ...state,
        new: { show: false },
      };
    }
    if (action.type === SAVE_NEW) {
      return {
        ...state,
        new: {
          ...state.new,
          working: true,
        },
      };
    }
    if (action.type === REFRESH_PAGE) {
      const { page } = action.payload;
      return {
        ...state,
        pages: Object.entries(state.pages).reduce(
          (result, [key, value]) => {
            if (Number(key) !== page) {
              result[key] = value;
            }
            return result;
          },
          {}
        ),
      };
    }
    if (action.type === NEW_FAILED) {
      const { errorMessage: error } = action.payload;
      return {
        ...state,
        new: {
          ...state.new,
          working: false,
          error,
        },
      };
    }
    return state;
  };
  const componentReducer = (state, action) => {
    if (action.type === EDIT) {
      const { statePath, item } = action.payload;
      return reduceStatePath(
        state,
        statePath,
        itemState => ({
          ...itemState,
          edit: {
            ...itemState.edit,
            [item.id]: {
              item,
              error: false,
              working: false,
            },
          },
        })
      );
    }
    if (action.type === UPDATE) {
      const {
        statePath,
        item: { id },
      } = action.payload;
      return reduceStatePath(
        state,
        statePath,
        itemState => ({
          ...itemState,
          edit: {
            ...itemState.edit,
            [id]: {
              ...state[id],
              error: false,
              working: true,
            },
          },
        })
      );
    }
    if (action.type === UPDATE_FAILED) {
      const { errorMessage: error } = action.payload;
      const {
        statePath,
        item: { id },
      } = action.payload.fromAction.payload;
      return reduceStatePath(
        state,
        statePath.concat(['edit', id]),
        itemState => ({
          ...itemState,
          error,
          working: false,
        })
      );
    }
    if (
      action.type === UPDATE_SUCCESS ||
      action.type === CANCEL_UPDATE
    ) {
      const {
        statePath,
        item: { id },
      } = action.payload;
      return reduceStatePath(
        state,
        statePath,
        itemState => ({
          ...itemState,
          edit: Object.entries(itemState.edit).reduce(
            (result, [key, value]) => {
              if (Number(key) !== id) {
                result[key] = value;
              }
              return result;
            },
            {}
          ),
        })
      );
    }
    if (action.type === DELETE_FAILED) {
      const { errorMessage: error } = action.payload;
      const {
        statePath,
      } = action.payload.fromAction.payload;
      return reduceStatePath(
        state,
        statePath.concat('remove'),
        itemState => ({
          ...itemState,
          error,
          working: false,
        })
      );
    }
    if (action.type === REQUEST_DELETE) {
      const { item, statePath } = action.payload;
      return reduceStatePath(
        state,
        statePath,
        itemState => ({
          ...itemState,
          remove: {
            [item.id]: true,
            item,
          },
        })
      );
    }
    if (
      action.type === CANCEL_DELETE ||
      action.type === DELETE_SUCCESS
    ) {
      const { statePath } = action.payload;
      return reduceStatePath(
        state,
        statePath,
        itemState => ({
          ...itemState,
          remove: {},
        })
      );
    }
    if (action.type === CONFIRM_DELETE) {
      const { statePath } = action.payload;
      return reduceStatePath(
        state,
        statePath,
        itemState => ({
          ...itemState,
          remove: {
            ...itemState.remove,
            working: true,
          },
        })
      );
    }
    if (action.type === FIELD_CHANGE) {
      const {
        statePath,
        change: { id, fieldName, value },
      } = action.payload;
      return reduceStatePath(
        state,
        statePath.concat(['edit', id, 'item']),
        itemState => ({
          ...itemState,
          [fieldName]: value,
        })
      );
    }
    if (action.type === DIRECT_UPDATE) {
      const { statePath, item } = action.payload;
      return reduceStatePath(
        state,
        statePath.concat(['directUpdate']),
        itemState => ({
          ...itemState,
          [item.id]: item,
        })
      );
    }
    if (action.type === DIRECT_UPDATE_SUCCESS) {
      const {
        statePath,
        item: { id },
      } = action.payload;
      return reduceStatePath(
        state,
        statePath.concat(['directUpdate']),
        itemState =>
          Object.entries(itemState).reduce(
            (result, [key, value]) => {
              if (Number(key) !== id) {
                result[key] = value;
              }
              return result;
            },
            {}
          )
      );
    }

    if (action.type === CHANGE_PAGE) {
      const { statePath, page } = action.payload;
      return reduceStatePath(
        state,
        statePath,
        itemState => ({
          ...itemState,
          current: page,
        })
      );
    }
    return state;
  };

  return {
    defaultDataState,
    reducer: (state, action) =>
      reduceStatePath(
        componentReducer(state, action),
        dataStatePath,
        itemsReducer(action)
      ),
  };
};
