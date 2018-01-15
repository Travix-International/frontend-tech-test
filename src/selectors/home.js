import { createSelector } from 'reselect'

const selectHome = state => state.getIn(['resources', 'home'])

const makeSelectTitle = () => createSelector(
  selectHome,
  state => state.get('title'),
)

const makeSelectDescription = () => createSelector(
  selectHome,
  state => state.get('description'),
)

export {
  selectHome,
  makeSelectTitle,
  makeSelectDescription,
}
