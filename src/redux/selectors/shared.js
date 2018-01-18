import { createSelector } from 'reselect'

const selectSettings = state => state.get('settings')

const makeSelectLanguage = () => createSelector(
  selectSettings,
  state => state.get('language'),
)

export {
  selectSettings,
  makeSelectLanguage,
}
