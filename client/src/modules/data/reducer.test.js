import initActions from './actions';
import initReducer from './reducer';
const statePath = ['data'];
const listPaths = ['list1', 'list2'];
const actions = initActions('TEST');
const r = initReducer(actions, statePath);
const listSate = {
  page: { current: 1 },
  list: {
    edit: {},
    remove: {},
  },
};

const state = {
  data: r.defaultDataState,
  list1: listSate,
  list2: listSate,
};
const dataResult = {
  data: [{ id: 1 }, { id: 2 }],
  page: { current: 1, total: 2 },
};

it('Should write page of data to state', () => {
  const action = actions.fetchItemsSuccess(
    dataResult,
    statePath
  );
  const newState = r.reducer(state, action);
  const { pages, data } = newState.data;

  expect(pages).toEqual({
    '1': { error: false, loading: false, ids: [1, 2] },
    total: 2,
  });
  expect(data).toEqual({ '1': { id: 1 }, '2': { id: 2 } });
});
it('Should update the correct field', () => {
  const listActions = actions.initActionCreators([
    'list1',
    'list',
  ]);
  const fieldAction = listActions.createItemFieldChange(
    'text'
  );
  const state = {
    data: {
      pages: {
        '1': { error: false, loading: false, ids: [1] },
        total: 1,
      },
      data: { '1': { id: 1, text: 'hi' } },
      new: {},
    },
    list1: {
      page: { current: 1 },
      list: {
        edit: { '1': { item: { id: '1', text: 'hi' } } },
        remove: {},
      },
    },
    list2: {
      page: { current: 1 },
      list: { edit: {}, remove: {} },
    },
  };
  const newState = r.reducer(
    state,
    fieldAction(1, 'new value')
  );
  expect(newState.list2).toBe(state.list2);
  expect(newState.list1.list.edit[1].item.text).toBe(
    'new value'
  );
});
