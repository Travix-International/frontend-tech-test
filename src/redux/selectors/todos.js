import { createSelector } from 'reselect'

const selectTodos = state => state.getIn(['resources', 'todos'])

const makeSelectAllTodos = () => createSelector(
  selectTodos,
  state => state.get('items'),
)

export {
  selectTodos,
  makeSelectAllTodos,
}
