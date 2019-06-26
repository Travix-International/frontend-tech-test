import * as tasks from './index';
const actions = tasks.initActionCreators(['tasksList']);

const listPath = ['tasksList'];

it('Should make correct update Action', () => {
  const itemIn = {};
  const {
    type,
    payload: { statePath, item },
  } = actions.updateItem(itemIn);
  expect(statePath).toEqual(listPath);
  expect(type).toBe(tasks.UPDATE);
  expect(item).toBe(itemIn);
});
it('Should make correct update field action', () => {
  const fieldAction = actions.createItemFieldChange(
    'myField'
  );
  const result = fieldAction(22, 'new value');
  const {
    type,
    payload: { change, statePath },
  } = result;
  expect(statePath).toEqual(listPath);
  expect(change).toEqual({
    id: 22,
    fieldName: 'myField',
    value: 'new value',
  });
  expect(type).toBe(tasks.FIELD_CHANGE);
});
