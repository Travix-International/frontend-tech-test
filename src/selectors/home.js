import { createSelector } from 'reselect'

const selectHome = state => state.get('home')

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
