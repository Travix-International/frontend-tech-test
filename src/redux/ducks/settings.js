import { createAction, handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

import {
  SUCCESS,
  ERROR,
  domain,
} from 'redux/constants'

/* Actions */
const settings = domain.defineAction('settings')

export const CHANGE_LANGUAGE = settings.defineAction('CHANGE_LANGUAGE', [SUCCESS, ERROR])

/* Reducer */
const defaultState = fromJS({ language: 'en' })

const reducer = handleActions({
  [CHANGE_LANGUAGE.SUCCESS]: (state, action) => state.setIn(['language'], action.payload.language),
}, defaultState)

export default reducer

/* Action Creators */
export const changeLanguage = createAction(CHANGE_LANGUAGE.SUCCESS)

/* Side Effects */
