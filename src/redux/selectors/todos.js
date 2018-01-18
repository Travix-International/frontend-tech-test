import { createSelector } from 'reselect'

const selectTodos = state => state.getIn(['resources', 'todos'])

const getFilter = (state, { match }) => match.params.filter

const makeSelectTodos = () => createSelector(
  [getFilter, selectTodos],
  (filter, state) => {
    const items = state.get('items')

    switch (filter) {
      case 'active':
        return items.filter(item => !item.get('done'))

      case 'done':
        return items.filter(item => item.get('done'))

      default:
        return items
    }
  },
)

export {
  selectTodos,
  makeSelectTodos,
}
